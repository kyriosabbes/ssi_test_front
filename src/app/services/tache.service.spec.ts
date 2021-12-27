import { TestBed } from '@angular/core/testing';

import { tacheService } from './tache.service';

describe('tacheService', () => {
  let service: tacheService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(tacheService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
