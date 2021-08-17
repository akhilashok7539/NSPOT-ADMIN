import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDesktypeComponent } from './add-desktype.component';

describe('AddDesktypeComponent', () => {
  let component: AddDesktypeComponent;
  let fixture: ComponentFixture<AddDesktypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddDesktypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDesktypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
