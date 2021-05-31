import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstituesComponent } from './institues.component';

describe('InstituesComponent', () => {
  let component: InstituesComponent;
  let fixture: ComponentFixture<InstituesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstituesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstituesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
