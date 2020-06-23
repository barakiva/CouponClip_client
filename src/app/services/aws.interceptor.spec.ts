import { TestBed } from '@angular/core/testing';

import { AwsInterceptor } from './aws.interceptor';

describe('AwsInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      AwsInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: AwsInterceptor = TestBed.inject(AwsInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
