import { TestBed } from '@angular/core/testing';

import { QuestListService } from './quest-list.service';

describe('QuestListService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: QuestListService = TestBed.get(QuestListService);
    expect(service).toBeTruthy();
  });
});
