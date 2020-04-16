import * as assert from 'assert';
import { numJewelsInStones } from '../src/jewels-and-stones';

describe('jewels and stones', () => {
  it('should pass standard cases', () => {
    assert.equal(numJewelsInStones('aA', 'aAAbbbb'), 3);
    assert.equal(numJewelsInStones('z', 'ZZ'), 0);
  });

  it('should handle special cases', () => {
    assert.equal(numJewelsInStones('', 'AA'), 0);
  });
});
