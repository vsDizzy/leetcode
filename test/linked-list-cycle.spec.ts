import * as assert from 'assert';
import { ListNode, hasCycle } from '../src/linked-list-cycle';

describe('linked list cycle', () => {
  it('should pass standard cases', () => {
    assert.equal(hasCycle(ListNode.create([3, 2, 0, -4], 1)), true);
    assert.equal(hasCycle(ListNode.create([1, 2], 0)), true);
    assert.equal(hasCycle(ListNode.create([1], -1)), false);
  });

  it('should handle special cases', () => {
    assert.equal(hasCycle(ListNode.create([], -1)), false);
  });
});
