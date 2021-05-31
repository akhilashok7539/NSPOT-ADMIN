import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolAdmissionDeskComponent } from './school-admission-desk.component';

describe('SchoolAdmissionDeskComponent', () => {
  let component: SchoolAdmissionDeskComponent;
  let fixture: ComponentFixture<SchoolAdmissionDeskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchoolAdmissionDeskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchoolAdmissionDeskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
