import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GameDBService {
  games: GAME[] = [];

  constructor() {
    if (typeof(Storage) !== "undefined") {
      const games = localStorage.getItem('puzzle');
      this.games = games ? JSON.parse(games) : [];
    }
  }

  getGames(){
    return this.games;
  }

  save(game){
    const count = this.games.length;
    game.id = count ? this.games[count-1].id + 1 : 0;
    this.games.push(game);
    localStorage.puzzle = JSON.stringify(this.games);
  }

  delete(id){
    this.games = this.games.filter((game) => game.id !== id);
    localStorage.puzzle = JSON.stringify(this.games);
  }
}

export type GAME = {id: number, categoryId: number, folder: string, image: string, time: string, moves: number, fails: number};