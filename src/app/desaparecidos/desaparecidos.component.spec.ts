import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesaparecidosComponent } from './desaparecidos.component';

describe('DesaparecidosComponent', () => {
  let component: DesaparecidosComponent;
  let fixture: ComponentFixture<DesaparecidosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DesaparecidosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DesaparecidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
