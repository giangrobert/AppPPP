import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitudGeneradaComponent } from './solicitud-generada.component';

describe('SolicitudGeneradaComponent', () => {
  let component: SolicitudGeneradaComponent;
  let fixture: ComponentFixture<SolicitudGeneradaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SolicitudGeneradaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SolicitudGeneradaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
