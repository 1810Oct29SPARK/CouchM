import { TestBed } from '@angular/core/testing';

import { UserInfoCookieService } from './user-info-cookie.service';

describe('UserInfoCookieService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserInfoCookieService = TestBed.get(UserInfoCookieService);
    expect(service).toBeTruthy();
  });
});
