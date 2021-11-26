import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAddmissionsListComponent } from './view-addmissions-list.component';

describe('ViewAddmissionsListComponent', () => {
  let component: ViewAddmissionsListComponent;
  let fixture: ComponentFixture<ViewAddmissionsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewAddmissionsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAddmissionsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
