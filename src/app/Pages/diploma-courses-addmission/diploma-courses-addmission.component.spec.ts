import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiplomaCoursesAddmissionComponent } from './diploma-courses-addmission.component';

describe('DiplomaCoursesAddmissionComponent', () => {
  let component: DiplomaCoursesAddmissionComponent;
  let fixture: ComponentFixture<DiplomaCoursesAddmissionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiplomaCoursesAddmissionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiplomaCoursesAddmissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
