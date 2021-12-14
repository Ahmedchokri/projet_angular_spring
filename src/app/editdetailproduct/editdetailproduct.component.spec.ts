import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditdetailproductComponent } from './editdetailproduct.component';

describe('EditdetailproductComponent', () => {
  let component: EditdetailproductComponent;
  let fixture: ComponentFixture<EditdetailproductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditdetailproductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditdetailproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
