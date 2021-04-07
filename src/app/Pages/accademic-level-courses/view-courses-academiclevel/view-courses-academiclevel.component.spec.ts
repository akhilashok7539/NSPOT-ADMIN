import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCoursesAcademiclevelComponent } from './view-courses-academiclevel.component';

describe('ViewCoursesAcademiclevelComponent', () => {
  let component: ViewCoursesAcademiclevelComponent;
  let fixture: ComponentFixture<ViewCoursesAcademiclevelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewCoursesAcademiclevelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewCoursesAcademiclevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
