import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListdetailfactureComponent } from './listdetailfacture.component';

describe('ListdetailfactureComponent', () => {
  let component: ListdetailfactureComponent;
  let fixture: ComponentFixture<ListdetailfactureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListdetailfactureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListdetailfactureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
