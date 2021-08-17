import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesktypeComponent } from './desktype.component';

describe('DesktypeComponent', () => {
  let component: DesktypeComponent;
  let fixture: ComponentFixture<DesktypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesktypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesktypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
