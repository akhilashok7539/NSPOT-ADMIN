import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSubcat3Component } from './edit-subcat3.component';

describe('EditSubcat3Component', () => {
  let component: EditSubcat3Component;
  let fixture: ComponentFixture<EditSubcat3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditSubcat3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditSubcat3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
