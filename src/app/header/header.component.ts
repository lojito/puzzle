import { Component, OnInit } from '@angular/core';
import { DictionaryService } from '../dictionary.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  private subscription;
  languages: any;

  constructor(private dictionary: DictionaryService) {}

  ngOnInit(): void {
    this.subscription = this.dictionary.getLanguages().subscribe((languages) => {
      this.languages = languages;
    })  
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  setLanguage(lang): void {
    this.dictionary.setLanguage(lang);
  }  
}
