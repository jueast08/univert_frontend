import { TestBed } from '@angular/core/testing';

import { ConnectedUserService } from './connected-user.service';

describe('ConnectedUserService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ConnectedUserService = TestBed.get(ConnectedUserService);
    expect(service).toBeTruthy();
  });
});
