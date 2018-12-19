import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CnafUtilsComponent } from './cnaf-utils.component';

describe('CnafUtilsComponent', () => {
  let component: CnafUtilsComponent;
  let fixture: ComponentFixture<CnafUtilsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CnafUtilsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CnafUtilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
