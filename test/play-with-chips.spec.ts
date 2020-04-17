import * as assert from 'assert';
import { minCostToMoveChips } from '../src/play-with-chips';

describe('play with chips', () => {
  it('should pass standard cases', () => {
    assert.equal(minCostToMoveChips([1, 2, 3]), 1);
    assert.equal(minCostToMoveChips([2, 2, 2, 3, 3]), 2);
  });

  it('should handle special cases', () => {
    assert.equal(minCostToMoveChips([]), 0);
    assert.equal(minCostToMoveChips([1]), 0);
  });
});
