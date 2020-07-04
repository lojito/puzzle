import { Component } from '@angular/core';

@Component({
  selector: 'app-repository',
  templateUrl: './repository.component.html',
  styleUrls: ['./repository.component.css']
})
export class RepositoryComponent {
  readonly imagesPerCategory = 20;  
  paths = [];

  onCategoryChange(category): void {
    const paths = [];
    for (let i = 0; i < this.imagesPerCategory; i++){
      paths.push(`https://firebasestorage.googleapis.com/v0/b/puzzle-ebd10.appspot.com/o/images%2F${category.folder}%2F${i}.jpg?alt=media`)
    }
    this.paths = paths;
  }

}
