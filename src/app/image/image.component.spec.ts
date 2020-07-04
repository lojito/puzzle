import { ImageComponent } from './image.component';
import { DictionaryService } from '../dictionary.service';
import { Observable } from 'rxjs';
import 'rxjs/add/observable/from';

describe('ImagesComponent', () => {
  let component: ImageComponent;
  let service: DictionaryService;

  beforeEach(() => {
    service = new DictionaryService(null);
    component = new ImageComponent(service);
  });

  it('should set the imageText property to the translation returned from the server', () => {
    spyOn(service, 'getTranslations').and.callFake(() => {
      return Observable.from([{ IMAGE: 'Imagen'}]);
    });
    
    component.ngOnInit();

    expect(component.imageText === 'Imagen').toBeTrue()
  });

  it('should return a random image number greater than or equal to zero and less that imagesPerCategory when randomizing', () => {
    let image = component['randomImage']();

    expect(image).toBeGreaterThanOrEqual(0);
    expect(image).toBeLessThan(component.imagesPerCategory);
  });

  it('should raise the imageChange event when refreshing', () => {
    let image = null;
    let path = null;

    component.imageChange.subscribe((img) => {
      image = img;
      path = `./assets/images/habana/${img}.jpg`;
    });

    component.refreshImage();

    expect(image).not.toBeNull();
    expect(path).not.toBeNull();
  });

});