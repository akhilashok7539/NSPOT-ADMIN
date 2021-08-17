import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSubcat2Component } from './add-subcat2.component';

describe('AddSubcat2Component', () => {
  let component: AddSubcat2Component;
  let fixture: ComponentFixture<AddSubcat2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddSubcat2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSubcat2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
