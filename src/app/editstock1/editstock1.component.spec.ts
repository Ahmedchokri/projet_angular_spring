import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Editstock1Component } from './editstock1.component';

describe('Editstock1Component', () => {
  let component: Editstock1Component;
  let fixture: ComponentFixture<Editstock1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Editstock1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Editstock1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
