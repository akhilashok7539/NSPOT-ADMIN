import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCoursesAcademiclevelComponent } from './add-courses-academiclevel.component';

describe('AddCoursesAcademiclevelComponent', () => {
  let component: AddCoursesAcademiclevelComponent;
  let fixture: ComponentFixture<AddCoursesAcademiclevelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCoursesAcademiclevelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCoursesAcademiclevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
