import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { DictionaryService } from '../dictionary.service';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-category-history',
  templateUrl: './category-history.component.html',
  styleUrls: ['./category-history.component.css']
})
export class CategoryHistoryComponent implements OnInit, OnDestroy {
  private subscription;  
  private subscriptionTranslations;  
  categoryName: string;
  categoryText: string;  
  @Input() categoryId: number;

  constructor(private dictionary: DictionaryService, private categoryService: CategoryService) {}

  ngOnInit(): void {
    this.subscription = this.categoryService.getCategories().subscribe((dataCategories: any[]) => {
      this.subscriptionTranslations = this.dictionary.getTranslations().subscribe((dataTranslations) => {
        for (let i = 0; i < dataCategories.length; i++) {
          if (dataCategories[i].id == this.categoryId) {
            this.categoryName = dataTranslations[dataCategories[i].name];
            break;
          }
        }  
        this.categoryText = dataTranslations['CATEGORY'];
      });
    });
  }

  ngOnDestroy(): void {
    this.subscriptionTranslations.unsubscribe();
    this.subscription.unsubscribe();
  }

}
