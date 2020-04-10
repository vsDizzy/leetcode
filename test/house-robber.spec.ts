import * as assert from 'assert';
import { rob } from '../src/house-robber';

describe('house-robber', () => {
  it('should pass standard cases', () => {
    assert.equal(rob([1, 2, 3, 1]), 4);
    assert.equal(rob([2, 7, 9, 3, 1]), 12);
  });

  it('should handle special cases', () => {
    assert.equal(rob([4, 1, 2, 7, 5, 3, 1]), 14);
  });
});
