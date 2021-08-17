import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSubcat4Component } from './add-subcat4.component';

describe('AddSubcat4Component', () => {
  let component: AddSubcat4Component;
  let fixture: ComponentFixture<AddSubcat4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddSubcat4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSubcat4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
