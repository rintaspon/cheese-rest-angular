import { TestBed } from '@angular/core/testing';

import { CheeseMakerImplService } from './cheese-maker-impl.service';

describe('CheeseMakerImplService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CheeseMakerImplService = TestBed.get(CheeseMakerImplService);
    expect(service).toBeTruthy();
  });
});
