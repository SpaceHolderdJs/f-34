import { TestBed } from '@angular/core/testing';

import { TestServiceService } from './test-service.service';

describe('TestServiceService', () => {
  let service: TestServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TestServiceService);
  });

  it('should have initial counter as a value', () => {
    const couter = service.counter;
    expect(couter).toEqual(0);
  });

  it('should increase the counter ', () => {
    service.increase();

    expect(service.counter).toEqual(1);
  });

  it('should decrease the counter', () => {
    service.decrease();

    expect(service.counter).toEqual(-1);
  })
});
