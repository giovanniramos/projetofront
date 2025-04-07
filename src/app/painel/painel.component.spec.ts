import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PainelComponent } from './painel.component';

import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';

import { MessageService } from '../services/message.service';
import { DesaparecidosService } from '../services/desaparecidos.service';

import { StoreModule } from '@ngrx/store';
import { Store } from '@ngrx/store';
import * as fromApp from './../store/app.reducer';

describe('PainelComponent', () => {
  let component: PainelComponent;
  let fixture: ComponentFixture<PainelComponent>;

  let store: Store<fromApp.AppState>;
  let httpClient: HttpClient;
  let messageService: MessageService;
  let desaparecidosService: DesaparecidosService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({ data: fromApp.AppReducer }), // Register the reducer
        HttpClientModule,
        ReactiveFormsModule,
        NgxPaginationModule
      ],
      declarations: [
        PainelComponent
      ]
    }).compileComponents();

    store = TestBed.inject(Store);
    httpClient = TestBed.inject(HttpClient);
    messageService = TestBed.inject(MessageService);
    desaparecidosService = TestBed.inject(DesaparecidosService);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PainelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
