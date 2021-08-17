import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Subcatgory5Component } from './subcatgory5.component';

describe('Subcatgory5Component', () => {
  let component: Subcatgory5Component;
  let fixture: ComponentFixture<Subcatgory5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Subcatgory5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Subcatgory5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
