import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewDetialedComponent } from './view-detialed.component';

describe('ViewDetialedComponent', () => {
  let component: ViewDetialedComponent;
  let fixture: ComponentFixture<ViewDetialedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewDetialedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewDetialedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
