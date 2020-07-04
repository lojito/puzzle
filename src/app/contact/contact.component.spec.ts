import { ContactComponent } from './Contact.component';
import { DictionaryService } from '../dictionary.service';
import { Observable } from 'rxjs';
import 'rxjs/add/observable/from';

describe('ContactComponent', () => {
  let service: DictionaryService = new DictionaryService(null);
  let component: ContactComponent;

  beforeEach(() => {
    component = new ContactComponent(service);
  });

  it('should set the author, email, github, linkedin, availability and status properties to the corresponding translations returned from the server', () => {
    spyOn(service, 'getTranslations').and.callFake(() => {
      return Observable.from([{ AUTHOR: 'Autor:',
                                EMAIL: 'Correo:',
                                GITHUB: 'Github:',
                                LINKEDIN: 'LinkedIn:',
                                AVAILABILITY: 'Disponibilidad:',
                                STATUS: 'Inmediatamente'}]);
    });

    component.ngOnInit();

    expect(component.author === 'Autor:').toBeTrue();
    expect(component.email === 'Correo:').toBeTrue();
    expect(component.github === 'Github:').toBeTrue();
    expect(component.linkedin === 'LinkedIn:').toBeTrue();
    expect(component.availability === 'Disponibilidad:').toBeTrue();
    expect(component.status === 'Inmediatamente').toBeTrue();    
  });

})