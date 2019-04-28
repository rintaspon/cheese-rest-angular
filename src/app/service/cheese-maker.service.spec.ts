import { TestBed } from '@angular/core/testing';

import { CheeseMakerService } from './cheese-maker.service';

describe('CheeseMakerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CheeseMakerService = TestBed.get(CheeseMakerService);
    expect(service).toBeTruthy();
  });
});
