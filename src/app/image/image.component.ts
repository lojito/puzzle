import { Component, OnInit, OnDestroy, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { DictionaryService } from '../dictionary.service';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit, OnDestroy, OnChanges {
  readonly imagesPerCategory = 20;
  private subscription;
  @Input() folder: string;
  @Input() image: number;
  @Output() imageChange = new EventEmitter();
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
      this.setPath(changes.folder.currentValue);
    }
  }
  
  private setPath(folder: string): void {
    this.path = `https://firebasestorage.googleapis.com/v0/b/puzzle-ebd10.appspot.com/o/images%2F${folder}%2F${this.image}.jpg?alt=media`;

    this.pathMobile = `https://firebasestorage.googleapis.com/v0/b/puzzle-ebd10.appspot.com/o/images%2F${folder}%2Fmobile%2F${this.image}.jpg?alt=media`;
  }

  refreshImage(): void {
    let image = this.randomImage();
    this.image = image;
    this.setPath(this.folder);
    this.imageChange.emit(image + '');
  }

  private randomImage() {
    let image = Math.floor(Math.random() * this.imagesPerCategory);
    while ( image === this.image ){
      image = Math.floor(Math.random() * this.imagesPerCategory);
    }
    return image;
  }

}
