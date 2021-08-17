import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSubcat5Component } from './add-subcat5.component';

describe('AddSubcat5Component', () => {
  let component: AddSubcat5Component;
  let fixture: ComponentFixture<AddSubcat5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddSubcat5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSubcat5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
