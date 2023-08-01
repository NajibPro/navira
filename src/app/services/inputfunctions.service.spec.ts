import { TestBed } from '@angular/core/testing';

import { InputfunctionsService } from './inputfunctions.service';

describe('InputfunctionsService', () => {
  let service: InputfunctionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InputfunctionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
