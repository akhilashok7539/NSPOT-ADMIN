import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DegreeCoursesRegularComponent } from './degree-courses-regular.component';

describe('DegreeCoursesRegularComponent', () => {
  let component: DegreeCoursesRegularComponent;
  let fixture: ComponentFixture<DegreeCoursesRegularComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DegreeCoursesRegularComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DegreeCoursesRegularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
