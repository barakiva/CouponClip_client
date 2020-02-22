import { TestBed } from '@angular/core/testing';

import { NumberExplainerService } from './number-explainer.service';

describe('NumberExplainerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NumberExplainerService = TestBed.get(NumberExplainerService);
    expect(service).toBeTruthy();
  });
});
