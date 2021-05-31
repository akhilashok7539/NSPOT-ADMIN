import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccademicLevelCoursesComponent } from './accademic-level-courses.component';

describe('AccademicLevelCoursesComponent', () => {
  let component: AccademicLevelCoursesComponent;
  let fixture: ComponentFixture<AccademicLevelCoursesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccademicLevelCoursesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccademicLevelCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
