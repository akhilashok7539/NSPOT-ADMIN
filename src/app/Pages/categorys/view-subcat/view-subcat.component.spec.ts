import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSubcatComponent } from './view-subcat.component';

describe('ViewSubcatComponent', () => {
  let component: ViewSubcatComponent;
  let fixture: ComponentFixture<ViewSubcatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewSubcatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewSubcatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
