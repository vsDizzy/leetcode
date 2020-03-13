import * as assert from 'assert';
import { plusOne } from '../src/plus-one.inplace';

describe('plus one (in place)', () => {
  it('should pass defined cases', () => {
    assert.deepEqual(plusOne([1, 2, 3]), [1, 2, 4]);
    assert.deepEqual(plusOne([4, 3, 2, 1]), [4, 3, 2, 2]);
    assert.deepEqual(plusOne([0]), [1]);
  });

  it('should handle overflow', () => {
    assert.deepEqual(plusOne([9]), [1, 0]);
    assert.deepEqual(plusOne([9, 9]), [1, 0, 0]);
    assert.deepEqual(plusOne([9, 4, 9, 6, 9]), [9, 4, 9, 7, 0]);
  });
});
