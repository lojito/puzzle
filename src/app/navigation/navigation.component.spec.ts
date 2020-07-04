import { NavigationComponent } from './navigation.component';
import { DictionaryService } from '../dictionary.service';
import { Observable } from 'rxjs';
import 'rxjs/add/observable/from';

describe('NavigationComponent', () => {
  let service: DictionaryService = new DictionaryService(null);
  let component: NavigationComponent;

  beforeEach(() => {
    component = new NavigationComponent(service);
  });

  it('should set the puzzle, history, repository, about and contact properties to the corresponding translations returned from the server', () => {
    spyOn(service, 'getTranslations').and.callFake(() => {
      return Observable.from([{ HOME: 'Puzzle',
                                HISTORY: 'Histórico',
                                REPOSITORY: 'Banco',
                                ABOUT: 'Acerca de',
                                CONTACT: 'Contacto'}]);
    });

    component.ngOnInit();

    expect(component.puzzle === 'Puzzle').toBeTrue();
    expect(component.history === 'Histórico').toBeTrue();
    expect(component.repository === 'Banco').toBeTrue();
    expect(component.about === 'Acerca de').toBeTrue();
    expect(component.contact === 'Contacto').toBeTrue();

  });

})