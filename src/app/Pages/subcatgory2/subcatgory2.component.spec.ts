import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Subcatgory2Component } from './subcatgory2.component';

describe('Subcatgory2Component', () => {
  let component: Subcatgory2Component;
  let fixture: ComponentFixture<Subcatgory2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Subcatgory2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Subcatgory2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
