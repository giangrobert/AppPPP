import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevaPPPComponent } from './nueva-ppp.component';

describe('NuevaPPPComponent', () => {
  let component: NuevaPPPComponent;
  let fixture: ComponentFixture<NuevaPPPComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NuevaPPPComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevaPPPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
