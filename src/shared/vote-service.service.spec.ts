import { TestBed, inject } from '@angular/core/testing';

import { VoteServiceService } from './vote-service.service';

describe('VoteServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VoteServiceService]
    });
  });

  it('should be created', inject([VoteServiceService], (service: VoteServiceService) => {
    expect(service).toBeTruthy();
  }));
});
