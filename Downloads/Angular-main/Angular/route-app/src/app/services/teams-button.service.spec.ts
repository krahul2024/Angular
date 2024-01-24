import { TestBed } from '@angular/core/testing';

import { TeamsButtonService } from './teams-button.service';

describe('TeamsButtonService', () => {
  let service: TeamsButtonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TeamsButtonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
