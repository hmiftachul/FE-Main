import { TestBed } from '@angular/core/testing';

import { PacarService } from './pacar.service';

describe('PacarService', () => {
  let service: PacarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PacarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
