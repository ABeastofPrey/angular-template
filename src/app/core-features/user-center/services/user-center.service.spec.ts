import { TestBed } from '@angular/core/testing';

import { UserCenterService } from './user-center.service';

describe('UserCenterService', () => {
  let service: UserCenterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserCenterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
