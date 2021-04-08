import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDeskComponent } from './add-desk.component';

describe('AddDeskComponent', () => {
  let component: AddDeskComponent;
  let fixture: ComponentFixture<AddDeskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddDeskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDeskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
