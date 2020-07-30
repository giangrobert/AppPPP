import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CpAddComponent } from './cp-add.component';

describe('CpAddComponent', () => {
  let component: CpAddComponent;
  let fixture: ComponentFixture<CpAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CpAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CpAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
