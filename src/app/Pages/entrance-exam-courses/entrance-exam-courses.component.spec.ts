import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntranceExamCoursesComponent } from './entrance-exam-courses.component';

describe('EntranceExamCoursesComponent', () => {
  let component: EntranceExamCoursesComponent;
  let fixture: ComponentFixture<EntranceExamCoursesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntranceExamCoursesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntranceExamCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
