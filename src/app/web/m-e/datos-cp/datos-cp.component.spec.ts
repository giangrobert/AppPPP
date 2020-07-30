import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosCpComponent } from './datos-cp.component';

describe('DatosCpComponent', () => {
  let component: DatosCpComponent;
  let fixture: ComponentFixture<DatosCpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatosCpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatosCpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
