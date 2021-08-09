import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateOtherboardComponent } from './update-otherboard.component';

describe('UpdateOtherboardComponent', () => {
  let component: UpdateOtherboardComponent;
  let fixture: ComponentFixture<UpdateOtherboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateOtherboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateOtherboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
