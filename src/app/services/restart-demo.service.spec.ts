import { TestBed } from '@angular/core/testing';

import { RestartDemoService } from './restart-demo.service';

describe('RestartDemoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RestartDemoService = TestBed.get(RestartDemoService);
    expect(service).toBeTruthy();
  });
});
