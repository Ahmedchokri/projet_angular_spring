import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddStock1Component } from './add-stock1.component';

describe('AddStock1Component', () => {
  let component: AddStock1Component;
  let fixture: ComponentFixture<AddStock1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddStock1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddStock1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
