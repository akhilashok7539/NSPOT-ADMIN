import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewStudnetAdmissionsComponent } from './view-studnet-admissions.component';

describe('ViewStudnetAdmissionsComponent', () => {
  let component: ViewStudnetAdmissionsComponent;
  let fixture: ComponentFixture<ViewStudnetAdmissionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewStudnetAdmissionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewStudnetAdmissionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
