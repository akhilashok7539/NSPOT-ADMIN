import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCategorysComponent } from './edit-categorys.component';

describe('EditCategorysComponent', () => {
  let component: EditCategorysComponent;
  let fixture: ComponentFixture<EditCategorysComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditCategorysComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCategorysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
