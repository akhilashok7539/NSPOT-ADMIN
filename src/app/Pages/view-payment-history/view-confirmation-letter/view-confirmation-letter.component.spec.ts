import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewConfirmationLetterComponent } from './view-confirmation-letter.component';

describe('ViewConfirmationLetterComponent', () => {
  let component: ViewConfirmationLetterComponent;
  let fixture: ComponentFixture<ViewConfirmationLetterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewConfirmationLetterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewConfirmationLetterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
