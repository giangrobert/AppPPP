import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewpComponent } from './newp.component';

describe('NewpComponent', () => {
  let component: NewpComponent;
  let fixture: ComponentFixture<NewpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
