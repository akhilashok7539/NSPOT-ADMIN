import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Subcatgory4Component } from './subcatgory4.component';

describe('Subcatgory4Component', () => {
  let component: Subcatgory4Component;
  let fixture: ComponentFixture<Subcatgory4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Subcatgory4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Subcatgory4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
