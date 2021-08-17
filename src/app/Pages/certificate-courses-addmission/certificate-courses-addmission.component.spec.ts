import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificateCoursesAddmissionComponent } from './certificate-courses-addmission.component';

describe('CertificateCoursesAddmissionComponent', () => {
  let component: CertificateCoursesAddmissionComponent;
  let fixture: ComponentFixture<CertificateCoursesAddmissionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CertificateCoursesAddmissionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CertificateCoursesAddmissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
