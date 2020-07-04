import { StatsComponent } from './stats.component';
import { DictionaryService } from '../dictionary.service';
import { Observable } from 'rxjs';
import 'rxjs/add/observable/from';

describe('StatsComponent', () => {
  let service: DictionaryService = new DictionaryService(null);
  let component: StatsComponent;

  beforeEach(() => {
    component = new StatsComponent(service);
  });

  it('should set the timeText, movesText and failsText properties to the corresponding translations returned from the server', () => {
    spyOn(service, 'getTranslations').and.callFake(() => {
      return Observable.from([{  TIME: 'Tiempo:',
                                 MOVES: 'Jugadas:',
                                 FAILS: 'Errores:',}]);
    });

    component.ngOnInit();

    expect(component.timeText === 'Tiempo:').toBeTrue();
    expect(component.movesText === 'Jugadas:').toBeTrue();
    expect(component.failsText === 'Errores:').toBeTrue();
  });

})