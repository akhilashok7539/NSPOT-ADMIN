import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSubcat2Component } from './edit-subcat2.component';

describe('EditSubcat2Component', () => {
  let component: EditSubcat2Component;
  let fixture: ComponentFixture<EditSubcat2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditSubcat2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditSubcat2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
