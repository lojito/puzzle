import { CategoryHistoryComponent } from './category-history.component';
import { CategoryService } from '../category.service';
import { DictionaryService } from '../dictionary.service';
import { Observable } from 'rxjs';

describe('CategoryHistoryComponent', () => {
  let dictionaryService: DictionaryService = new DictionaryService(null);
  let categoryService: CategoryService = new CategoryService(null);
  let component: CategoryHistoryComponent;

  beforeEach(() => {
    component = new CategoryHistoryComponent(dictionaryService, categoryService);
  });

  it('should set the categoryName and categoryText properties of the component', () => {
    let dataCategoryService = [
      { "id":0, "name":"HAVANA_LANDMARKS", "folder":"habana"}, 
      { "id":1, "name":"MONTREAL_LANDMARKS", "folder":"montreal" }, 
      { "id":2, "name":"VANCOUVER_LANDMARKS", "folder":"vancouver" }, 
      { "id":3, "name":"SPAIN_LANDMARKS", "folder":"spain" }, 
      { "id":4, "name":"GERMANY_LANDMARKS", "folder":"germany" }, 
      { "id":5, "name":"SOCCER_PLAYERS", "folder":"soccer" }, 
      { "id":6, "name":"FRUITS_AND_VEGETABLES", "folder":"fruits" }, 
      { "id":7, "name":"ANIMALS", "folder":"animals" }, 
      { "id":8, "name":"SEINFELD", "folder":"seinfeld" },
      { "id":9, "name":"PUPPIES", "folder":"puppies"  }];

    let dataDictionaryService = {
      CATEGORY:              "Categoría:",
      HAVANA_LANDMARKS:      "Monumentos de La Habana",
      MONTREAL_LANDMARKS:    "Monumentos de Montreal",  
      VANCOUVER_LANDMARKS:   "Monumentos de Vancouver",
      SPAIN_LANDMARKS:       "Monumentos de España",
      GERMANY_LANDMARKS:     "Monumentos de Alemania",      
      SOCCER_PLAYERS:        "Jugadores de fútbol",
      FRUITS_AND_VEGETABLES: "Frutas y vegetales",
      ANIMALS:               "Animales",
      SEINFELD:              "Seinfeld",      
      PUPPIES:               "Cachorros"};

    spyOn(categoryService, 'getCategories').and.callFake(() => {
      return Observable.create(observer => {
        observer.next(dataCategoryService);
        observer.complete();
      });
    });

    spyOn(dictionaryService, 'getTranslations').and.callFake(() => {
      return Observable.create(observer => {
        observer.next(dataDictionaryService);
        observer.complete();
      });
    });

    component.categoryId = 0;
    component.ngOnInit();

    expect(component.categoryText === 'Categoría:').toBeTrue();
    expect(component.categoryName === 'Monumentos de La Habana').toBeTrue();
  });


})