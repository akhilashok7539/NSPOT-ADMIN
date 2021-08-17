import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherboardsComponent } from './otherboards.component';

describe('OtherboardsComponent', () => {
  let component: OtherboardsComponent;
  let fixture: ComponentFixture<OtherboardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtherboardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherboardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
