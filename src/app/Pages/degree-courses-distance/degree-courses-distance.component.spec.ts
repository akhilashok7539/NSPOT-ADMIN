import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DegreeCoursesDistanceComponent } from './degree-courses-distance.component';

describe('DegreeCoursesDistanceComponent', () => {
  let component: DegreeCoursesDistanceComponent;
  let fixture: ComponentFixture<DegreeCoursesDistanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DegreeCoursesDistanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DegreeCoursesDistanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
