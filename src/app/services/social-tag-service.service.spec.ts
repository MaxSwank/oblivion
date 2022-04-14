import { TestBed } from '@angular/core/testing';

import { SocialTagServiceService } from './social-tag-service.service';

describe('SocialTagServiceService', () => {
  let service: SocialTagServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SocialTagServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
