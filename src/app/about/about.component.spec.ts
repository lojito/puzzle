import { AboutComponent } from './about.component';
import { DictionaryService } from '../dictionary.service';
import { Observable } from 'rxjs';
import 'rxjs/add/observable/from';

describe('AboutComponent', () => {
  let service: DictionaryService = new DictionaryService(null);
  let component: AboutComponent;

  beforeEach(() => {
    component = new AboutComponent(service);
  });

  it('should set the tech, source and others properties to the corresponding translations returned from the server', () => {
    spyOn(service, 'getTranslations').and.callFake(() => {
      return Observable.from([{ TECH_STACK: 'El juego ha sido programado con:',
                                SOURCE_CODE: 'Código fuente:',
                                OTHER_GAMES: 'Otros juegos:'}]);
    });

    component.ngOnInit();

    expect(component.tech === 'El juego ha sido programado con:').toBeTrue();
    expect(component.source === 'Código fuente:').toBeTrue();
    expect(component.others === 'Otros juegos:').toBeTrue();
  });

})