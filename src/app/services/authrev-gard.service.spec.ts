import { TestBed } from '@angular/core/testing';

import { AuthrevGardService } from './authrev-gard.service';

describe('AuthrevGardService', () => {
  let service: AuthrevGardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthrevGardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
