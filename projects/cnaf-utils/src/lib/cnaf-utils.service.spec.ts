import { TestBed } from '@angular/core/testing';

import { CnafUtilsService } from './cnaf-utils.service';

describe('CnafUtilsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CnafUtilsService = TestBed.get(CnafUtilsService);
    expect(service).toBeTruthy();
  });
});
