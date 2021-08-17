import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UniverisitiesComponent } from './univerisities.component';

describe('UniverisitiesComponent', () => {
  let component: UniverisitiesComponent;
  let fixture: ComponentFixture<UniverisitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UniverisitiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UniverisitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
