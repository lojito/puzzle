import { GameComponent } from './game.component';
import { DictionaryService } from '../dictionary.service';
import { GameDBService } from '../gamedb.service';
import { Observable } from 'rxjs';
import 'rxjs/add/observable/from';

describe('GameComponent', () => {
  let service: DictionaryService = new DictionaryService(null);
  let gameDBService: GameDBService = new GameDBService();  
  let component: GameComponent;

  beforeEach(() => {
    component = new GameComponent(service, gameDBService);
  });

  it('should set the goal and end properties to the corresponding translations returned from the server', () => {
    spyOn(service, 'getTranslations').and.callFake(( ) => {
      return Observable.from([{ GAME_GOAL: 'Arrastra y suelta las imágenes!',
                                GAME_OVER: 'Fin de la partida!'}]);
    });

    component.ngOnInit();

    expect(component.goal === 'Arrastra y suelta las imágenes!').toBeTrue();
    expect(component.end === 'Fin de la partida!').toBeTrue();
  });

})