import { TestBed } from '@angular/core/testing';

import { NfcConnectionService } from './nfc-connection.service';

describe('NfcConnectionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NfcConnectionService = TestBed.get(NfcConnectionService);
    expect(service).toBeTruthy();
  });
});
