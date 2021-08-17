import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSubcat4Component } from './edit-subcat4.component';

describe('EditSubcat4Component', () => {
  let component: EditSubcat4Component;
  let fixture: ComponentFixture<EditSubcat4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditSubcat4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditSubcat4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
