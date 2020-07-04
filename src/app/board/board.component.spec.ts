import { BoardComponent } from './board.component';

describe('BoardComponent', () => {
  let component: BoardComponent;

  beforeEach(() => {
    component = new BoardComponent();
    component['reset']();
  });

  it('should zero the moves and fails properties when resetting', () => {   
    expect(component['moves']).toBe(0);
    expect(component['fails']).toBe(0);
  });

  it('should return the right number of pieces in place', () => {
    expect(component['numberOfPiecesInPlace']).toBe(0);
  });

  it('should shuffle all the pieces without exception when shuffling', () => {
    for (let i = 0; i < component.numberOfPieces; i++) {
      expect(component.pieces[i].index !== component.pieces[i].id).toBeTrue();
    }
  });

  it('should return true if game is over', () => {
    let pieces = new Array(component.numberOfPieces);
    for (let i = 0; i < component.numberOfPieces; i++) {
      pieces[i] = { id: i };
    }
    component.pieces = pieces;

    expect(component['isOver']()).toBeTrue();
  }); 

  it('should return false if game is not over', () => {
    expect(component['isOver']()).toBeFalse();
  });  

  it('should change the id of the two pieces when swapping', () => {
    let dragged = { index: 0, id: 1, misplaced: true, path: ''};
    let dropped = { index: 1, id: 0, misplaced: true, path: ''};
    
    component['swap'](dragged, dropped, 'id');

    expect(dragged.id === 0).toBeTrue();
    expect(dropped.id === 1).toBeTrue();
  });

  it('should change the path of the two pieces when swapping', () => {
    let dragged = { index: 0, id: 1, misplaced: true, path: './assets/images/habana/0/1.jpg'};
    let dropped = { index: 1, id: 0, misplaced: true, path: './assets/images/habana/0/0.jpg'};
    component['swap'](dragged, dropped, 'path');

    expect(dragged.path === './assets/images/habana/0/0.jpg').toBeTrue();
    expect(dropped.path === './assets/images/habana/0/1.jpg').toBeTrue();    
  });

  it('should increment the property fails if one of the two pieces was misplaced when dragging and dropping', () => {
    let piece = { index: 0, id: 1, misplaced: true, path: './assets/images/habana/0/1.jpg'};
    let fails = component['fails'];

    component['misplacedCheck'](piece);

    expect(component['fails'] === (fails + 1)).toBeTrue();
  });

  it('should not increment the property fails if none of the two pieces was misplaced when dragging and dropping', () => {
    let piece = { index: 0, id: 0, misplaced: false, path: './assets/images/habana/0/0.jpg'};
    let fails = component['fails'];

    component['misplacedCheck'](piece);

    expect(component['fails'] === (fails + 1)).toBeFalse();
  });

  it('should raise the statsChange event when dragging and dropping', () => {
    let moves = 0;
    let fails = 0;
    let over = false;

    component.statsChange.subscribe((stats) => {
      moves = stats.moves;
      fails = stats.fails;
      over  = stats.over;
    });
    let dragged = { index: 0, id: 1, misplaced: true, path: './assets/images/habana/0/1.jpg'};
    let dropped = { index: 1, id: 0, misplaced: true, path: './assets/images/habana/0/0.jpg'};

    component["dragAndDrop"](dragged, dropped);

    expect(moves).toBe(1);
    expect(fails).toBe(0);
    expect(over).toBeFalse();
  });  
});