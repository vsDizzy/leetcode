import * as assert from 'assert';
import { findPairs } from '../src/k-diff-pairs-in-an-array.fastest';

describe('k-diff pairs in an array (fastest)', () => {
  it('should pass standard cases', () => {
    assert.equal(findPairs([3, 1, 4, 1, 5], 2), 2);
    assert.equal(findPairs([1, 2, 3, 4, 5], 1), 4);
    assert.equal(findPairs([1, 3, 1, 5, 4], 0), 1);
  });

  it('should handle special cases', () => {
    assert.equal(findPairs([1, 2, 3, 4], -1), 0);
    assert.equal(findPairs([1, 1, 1, 1, 1], 0), 1);
    assert.equal(findPairs([1, 1, 2, 2, 2, 3], 1), 2);
    assert.equal(findPairs([1], 1), 0);
  });
});
