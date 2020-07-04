import { ImageHistoryComponent } from './image-history.component';
import { DictionaryService } from '../dictionary.service';
import { Observable } from 'rxjs';
import 'rxjs/add/observable/from';

describe('ImageHistoryComponent', () => {
  let component: ImageHistoryComponent;
  let service: DictionaryService;

  beforeEach(() => {
    service = new DictionaryService(null);
    component = new ImageHistoryComponent(service);
  });

  it('should set the imageText property to the translation returned from the server', () => {
    spyOn(service, 'getTranslations').and.callFake(() => {
      return Observable.from([{ IMAGE: 'Imagen'}]);
    });
    
    component.ngOnInit();

    expect(component.imageText === 'Imagen').toBeTrue()
  });

});