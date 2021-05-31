import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompetitiveExamCoursesComponent } from './competitive-exam-courses.component';

describe('CompetitiveExamCoursesComponent', () => {
  let component: CompetitiveExamCoursesComponent;
  let fixture: ComponentFixture<CompetitiveExamCoursesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompetitiveExamCoursesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompetitiveExamCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
