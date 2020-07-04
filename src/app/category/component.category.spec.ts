import { CategoryComponent } from './category.component';
import { CategoryService } from '../category.service';
import { DictionaryService } from '../dictionary.service';
import { Observable } from 'rxjs';

describe('CategoryComponent', () => {
  let dictionaryService: DictionaryService = new DictionaryService(null);
  let categoryService: CategoryService = new CategoryService(null);
  let component: CategoryComponent;

  beforeEach(() => {
    component = new CategoryComponent(dictionaryService, categoryService);
  });

  it('should set the categories and categoryText properties of the component', () => {
    let dataCategoryService = [
      {  id: 0, "name":"HAVANA_LANDMARKS",      "folder":"habana"}, 
      {  id: 1, "name":"MONTREAL_LANDMARKS",    "folder":"montreal" }, 
      {  id: 2, "name":"VANCOUVER_LANDMARKS",   "folder":"vancouver" }, 
      {  id: 3, "name":"SPAIN_LANDMARKS",       "folder":"spain" }, 
      {  id: 4, "name":"GERMANY_LANDMARKS",     "folder":"germany" }, 
      {  id: 5, "name":"SOCCER_PLAYERS",        "folder":"soccer" }, 
      {  id: 6, "name":"FRUITS_AND_VEGETABLES", "folder":"fruits" }, 
      {  id: 7, "name":"ANIMALS",               "folder":"animals" }, 
      {  id: 8, "name":"SEINFELD",              "folder":"seinfeld" },
      {  id: 9, "name":"PUPPIES",               "folder":"puppies"  }];

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

    let categories = [      
      { id: 0, name: "Monumentos de La Habana", folder: "habana"    }, 
      { id: 1, name: "Monumentos de Montreal",  folder: "montreal"  }, 
      { id: 2, name: "Monumentos de Vancouver", folder: "vancouver" }, 
      { id: 3, name: "Monumentos de España",    folder: "spain"     }, 
      { id: 4, name: "Monumentos de Alemania",  folder: "germany"   }, 
      { id: 5, name: "Jugadores de fútbol",     folder: "soccer"    }, 
      { id: 6, name: "Frutas y vegetales",      folder: "fruits"    }, 
      { id: 7, name: "Animales",                folder: "animals"   }, 
      { id: 8, name: "Seinfeld",                folder: "seinfeld"  },
      { id: 9, name: "Cachorros",               folder: "puppies"   }];

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

    component.ngOnInit();

    let count = 0;
    for (let i = 0; i < component.categories.length; i++) {
      for (let j = 0; j < categories.length; j++) {
        if ((categories[j].name === component.categories[i].name) &&
           (categories[j].folder === component.categories[i].folder)) {
            count++;
            break;
        }
      } 
    }
    expect(count === categories.length).toBeTrue();
    expect(component.categoryText === 'Categoría:').toBeTrue();
  });


})