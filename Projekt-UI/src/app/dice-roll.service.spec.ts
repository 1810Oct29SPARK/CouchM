import { TestBed } from '@angular/core/testing';

import { DiceRollService } from './dice-roll.service';

describe('DiceRollService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DiceRollService = TestBed.get(DiceRollService);
    expect(service).toBeTruthy();
  });
});
