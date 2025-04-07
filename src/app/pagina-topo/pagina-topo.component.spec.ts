import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaTopoComponent } from './pagina-topo.component';

import { StoreModule } from '@ngrx/store';
import { Store } from '@ngrx/store';
import * as fromApp from './../store/app.reducer';

describe('PaginaTopoComponent', () => {
  let component: PaginaTopoComponent;
  let fixture: ComponentFixture<PaginaTopoComponent>;

  let store: Store<fromApp.AppState>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({ data: fromApp.AppReducer }), // Register the reducer
      ],
      declarations: [
        PaginaTopoComponent
      ]
    }).compileComponents();

    store = TestBed.inject(Store);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaTopoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
