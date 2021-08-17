import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Subcatgory3Component } from './subcatgory3.component';

describe('Subcatgory3Component', () => {
  let component: Subcatgory3Component;
  let fixture: ComponentFixture<Subcatgory3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Subcatgory3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Subcatgory3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
