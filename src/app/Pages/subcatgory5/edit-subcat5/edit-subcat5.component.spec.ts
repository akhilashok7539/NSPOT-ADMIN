import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSubcat5Component } from './edit-subcat5.component';

describe('EditSubcat5Component', () => {
  let component: EditSubcat5Component;
  let fixture: ComponentFixture<EditSubcat5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditSubcat5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditSubcat5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
