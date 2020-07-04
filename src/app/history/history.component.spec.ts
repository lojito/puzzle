import { HistoryComponent } from './History.component';
import { DictionaryService } from '../dictionary.service';
import { GameDBService } from '../gamedb.service';
import { Observable } from 'rxjs';
import 'rxjs/add/observable/from';

describe('HistoryComponent', () => {
  let service: DictionaryService = new DictionaryService(null);
  let gameService: GameDBService = new GameDBService();  
  let component: HistoryComponent;

  beforeEach(() => {
    component = new HistoryComponent(service, gameService);
  });

  it('should set the noHistoryYet and deleteGame properties to the corresponding translations returned from the server', () => {
    spyOn(service, 'getTranslations').and.callFake(() => {
      return Observable.from([{  
         NO_HISTORY: 'No tenemos todavía histórico de rompecabezas. Completa varios de ellos y regresa más tarde.',
         DELETE_GAME: 'Borrar juego'}]);
    });

    component.ngOnInit();

    expect(component.noHistoryYet === 'No tenemos todavía histórico de rompecabezas. Completa varios de ellos y regresa más tarde.').toBeTrue();
    expect(component.deleteGame === 'Borrar juego').toBeTrue();
  });

})