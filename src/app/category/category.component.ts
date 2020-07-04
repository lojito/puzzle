import { Component, OnInit, OnDestroy, Input, Output, EventEmitter } from '@angular/core';
import { DictionaryService } from '../dictionary.service';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})

export class CategoryComponent implements OnInit, OnDestroy {
  private subscription;
  private subscriptionTranslations;
  categories: any;
  categoryId: number;
  categoryText: string;
  @Output() categoryChange = new EventEmitter();

  constructor(private dictionary: DictionaryService, private categoryService: CategoryService) {}

  ngOnInit(): void {
    this.subscription = this.categoryService.getCategories().subscribe((dataCategories: any[]) => {
      this.subscriptionTranslations = this.dictionary.getTranslations().subscribe((dataTranslations) => {
        let categories = [];
        for (let i = 0; i < dataCategories.length; i++) {
          categories.push({ 
            id: dataCategories[i].id, 
            name: dataTranslations[dataCategories[i].name], 
            folder: dataCategories[i].folder});
        }
        this.categories = categories;
        this.categoryText = dataTranslations['CATEGORY'];
        this.categoryId = this.categories[Math.floor(Math.random() * this.categories.length)].id;
        this.emitCategory();
      });
    });
  }

  ngOnDestroy(): void {
    this.subscriptionTranslations.unsubscribe()
    this.subscription.unsubscribe();
  }
  
  emitCategory() {
    this.categoryChange.emit({
      categoryId: this.categoryId,
      folder: this.categories[this.categoryId].folder
    });
  }

  onChange(event): void {
    this.categoryId = event.target.value;
    this.emitCategory();
  }
}