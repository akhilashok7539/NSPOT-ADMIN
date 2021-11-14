import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCoursedetailsComponent } from './view-coursedetails.component';

describe('ViewCoursedetailsComponent', () => {
  let component: ViewCoursedetailsComponent;
  let fixture: ComponentFixture<ViewCoursedetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewCoursedetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewCoursedetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
