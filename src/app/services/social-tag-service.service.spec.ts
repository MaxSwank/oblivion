import { TestBed } from '@angular/core/testing';

import { SocialTagsService } from './social-tag-service.service';

describe('SocialTagServiceService', () => {
  let service: SocialTagsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SocialTagsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
