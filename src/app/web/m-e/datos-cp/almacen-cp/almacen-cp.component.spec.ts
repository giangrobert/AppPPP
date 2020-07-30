import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlmacenCpComponent } from './almacen-cp.component';

describe('AlmacenCpComponent', () => {
  let component: AlmacenCpComponent;
  let fixture: ComponentFixture<AlmacenCpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlmacenCpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlmacenCpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
