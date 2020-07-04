import { HeaderComponent } from './header.component';
import { DictionaryService } from '../dictionary.service';
import { Observable } from 'rxjs';

describe('HeaderComponent', () => {
  let dictionaryService: DictionaryService = new DictionaryService(null);
  let component: HeaderComponent;

  beforeEach(() => {
    component = new HeaderComponent(dictionaryService);
  });

  it('should set the language property of the component correctly', () => {

    let languages = [
      { id: 0, flag: "usa"}, 
      { id: 1, flag: "france"}, 
      { id: 2, flag: "spain"}];

    spyOn(dictionaryService, 'getLanguages').and.callFake(() => {
      return Observable.create(observer => {
        observer.next(languages);
        observer.complete();
      });
    });

    component.ngOnInit();

    expect(component.languages.length === languages.length).toBeTrue();
  });


})