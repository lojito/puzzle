import { Component, OnInit, OnDestroy, Input, OnChanges, SimpleChanges } from '@angular/core';
import { DictionaryService } from '../dictionary.service';

@Component({
  selector: 'app-image-history',
  templateUrl: './image-history.component.html',
  styleUrls: ['./image-history.component.css']
})
export class ImageHistoryComponent implements OnInit, OnDestroy, OnChanges {
  private subscription;
  @Input() folder: string;
  @Input() image: number; 
  path: string = '';
  pathMobile: string = '';
  imageText: string;

  constructor(private dictionary: DictionaryService) {}

  ngOnInit(): void {
    this.subscription = this.dictionary.getTranslations().subscribe((data) => {
      this.imageText = data['IMAGE'];
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.folder && changes.folder.currentValue) {
      this.path = `https://firebasestorage.googleapis.com/v0/b/puzzle-ebd10.appspot.com/o/images%2F${changes.folder.currentValue}%2F${this.image}.jpg?alt=media`;

      this.pathMobile = `https://firebasestorage.googleapis.com/v0/b/puzzle-ebd10.appspot.com/o/images%2F${changes.folder.currentValue}%2Fmobile%2F${this.image}.jpg?alt=media`;
    }
  }  
}
