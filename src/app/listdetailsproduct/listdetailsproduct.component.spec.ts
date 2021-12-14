import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListdetailsproductComponent } from './listdetailsproduct.component';

describe('ListdetailsproductComponent', () => {
  let component: ListdetailsproductComponent;
  let fixture: ComponentFixture<ListdetailsproductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListdetailsproductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListdetailsproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
