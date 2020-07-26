import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesPPPComponent } from './detalles-ppp.component';

describe('DetallesPPPComponent', () => {
  let component: DetallesPPPComponent;
  let fixture: ComponentFixture<DetallesPPPComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetallesPPPComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetallesPPPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
