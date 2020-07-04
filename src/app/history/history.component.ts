import { Component, OnInit, OnDestroy } from '@angular/core';
import { DictionaryService } from '../dictionary.service';
import { GameDBService } from '../gamedb.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit, OnDestroy {
  private subscription;  
  noHistory: boolean = true;
  noHistoryYet: string;
  deleteGame: string;

  constructor(private dictionary: DictionaryService, private gamedb: GameDBService) {}

  ngOnInit(): void { 
    this.subscription = this.dictionary.getTranslations().subscribe((data) => {
      this.noHistoryYet = data['NO_HISTORY'];
      this.deleteGame = data['DELETE_GAME'];
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  getGames() {
    let games = this.gamedb.getGames();
    this.noHistory = (games.length === 0);
    return games;
  }

  delete(gameId): void {
    this.gamedb.delete(gameId);
  }
}
