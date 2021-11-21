import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MakePaymentInstituteComponent } from './make-payment-institute.component';

describe('MakePaymentInstituteComponent', () => {
  let component: MakePaymentInstituteComponent;
  let fixture: ComponentFixture<MakePaymentInstituteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MakePaymentInstituteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MakePaymentInstituteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
