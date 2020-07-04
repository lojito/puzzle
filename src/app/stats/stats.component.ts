import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { DictionaryService } from '../dictionary.service';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit, OnDestroy {
  private subscription;  
  @Input() time: string;
  @Input() moves: number;
  @Input() fails: number;
  timeText: string;
  movesText: string;
  failsText: string;

  constructor(private dictionary: DictionaryService) {}

  ngOnInit(): void {
    this.subscription = this.dictionary.getTranslations().subscribe((data) => {
      this.timeText = data['TIME'];
      this.movesText = data['MOVES'];
      this.failsText = data['FAILS'];
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
    
}
