import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DictionaryService{
  private lang:number = 0;

  constructor(private http: HttpClient) {}

  getTranslations() {
    return  Observable.create(observer => {
      this.http.get("https://puzzle-ebd10.firebaseio.com/dictionary.json").subscribe((data: any[]) =>{
        let previousLang = -1;
        setInterval(() => {
          let newLang = this.lang;
          if (previousLang != newLang) {
            for (let i = 0; i < data.length; i++) {
              if (data[i].id == newLang) {
                observer.next(data[i]);
                previousLang = newLang;
                break;
              }
            }
          }
        }, 200);
      })
    })
  };
   
  getLanguages() {
    return Observable.create(observer => {
      this.http.get("https://puzzle-ebd10.firebaseio.com/dictionary.json").subscribe((data: any[]) => {
        let languages = [];
        for (let i = 0; i < data.length; i++) {
          languages.push({ id: data[i].id, flag: data[i].flag});
        }
        observer.next(languages);
        observer.complete();
      });
    });
  }

  setLanguage(lang:number): void {
    this.lang = lang;
  }

}
