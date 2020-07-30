import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosAlumComponent } from './datos-alum.component';

describe('DatosAlumComponent', () => {
  let component: DatosAlumComponent;
  let fixture: ComponentFixture<DatosAlumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatosAlumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatosAlumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
