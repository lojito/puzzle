import { Component, OnInit, OnDestroy } from '@angular/core';
import { DictionaryService } from '../dictionary.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit, OnDestroy {
  private subscription;  
  author: string;
  email: string;
  github: string;
  linkedin: string;
  availability: string;
  status: string;

  constructor(private dictionary: DictionaryService) {}

  ngOnInit(): void {
    this.subscription = this.dictionary.getTranslations().subscribe((data) => {
      this.author = data['AUTHOR'];
      this.email = data['EMAIL'];
      this.github = data['GITHUB'];
      this.linkedin = data['LINKEDIN'];
      this.availability = data['AVAILABILITY'];
      this.status = data['STATUS'];
    });    
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }  
}
