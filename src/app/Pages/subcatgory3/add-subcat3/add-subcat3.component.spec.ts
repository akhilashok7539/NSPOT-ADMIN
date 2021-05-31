import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSubcat3Component } from './add-subcat3.component';

describe('AddSubcat3Component', () => {
  let component: AddSubcat3Component;
  let fixture: ComponentFixture<AddSubcat3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddSubcat3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSubcat3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
