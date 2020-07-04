import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) {}

  getCategories() {
    return this.http.get("https://puzzle-ebd10.firebaseio.com/categories.json");
  }
}
