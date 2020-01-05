import { TestBed } from '@angular/core/testing';

import { ShowProductService } from './show-product.service';

describe('ShowProductService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ShowProductService = TestBed.get(ShowProductService);
    expect(service).toBeTruthy();
  });
});
