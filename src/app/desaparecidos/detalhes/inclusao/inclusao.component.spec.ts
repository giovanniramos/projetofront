import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InclusaoComponent } from './inclusao.component';

describe('InclusaoComponent', () => {
  let component: InclusaoComponent;
  let fixture: ComponentFixture<InclusaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InclusaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InclusaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
