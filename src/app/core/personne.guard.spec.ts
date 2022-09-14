import { TestBed } from '@angular/core/testing';

import { PersonneGuard } from './personne.guard';

describe('PersonneGuard', () => {
  let guard: PersonneGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(PersonneGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
