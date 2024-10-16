import { TestBed } from '@angular/core/testing';

import { TeamProjectService } from './team-project.service';

describe('TeamProjectService', () => {
  let service: TeamProjectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TeamProjectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
