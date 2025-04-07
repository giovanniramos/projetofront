import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalhesInclusaoComponent } from './detalhes-inclusao.component';

import { RouterTestingModule } from '@angular/router/testing';
import { ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';

describe('DetalhesInclusaoComponent', () => {
  let component: DetalhesInclusaoComponent;
  let fixture: ComponentFixture<DetalhesInclusaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        ReactiveFormsModule,
        HttpClientModule
      ],
      declarations: [
        DetalhesInclusaoComponent
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalhesInclusaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
