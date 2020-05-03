import * as assert from 'assert';
import { missingNumber } from '../src/missing-number';

describe('missing number', () => {
  it('should pass standard cases', () => {
    assert.equal(missingNumber([3, 0, 1]), 2);
    assert.equal(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1]), 8);
  });

  it('should handle special cases', () => {
    assert.equal(missingNumber([0]), 1);
  });
});
