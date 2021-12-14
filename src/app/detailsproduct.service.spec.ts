import { TestBed } from '@angular/core/testing';

import { DetailsproductService } from './detailsproduct.service';

describe('DetailsproductService', () => {
  let service: DetailsproductService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DetailsproductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
