import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOtherboardComponent } from './add-otherboard.component';

describe('AddOtherboardComponent', () => {
  let component: AddOtherboardComponent;
  let fixture: ComponentFixture<AddOtherboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddOtherboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddOtherboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
