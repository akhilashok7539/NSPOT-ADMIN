import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiffernetDesksComponent } from './differnet-desks.component';

describe('DiffernetDesksComponent', () => {
  let component: DiffernetDesksComponent;
  let fixture: ComponentFixture<DiffernetDesksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiffernetDesksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiffernetDesksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
