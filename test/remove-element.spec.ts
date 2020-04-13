import * as assert from 'assert';
import { removeElement } from '../src/remove-element';

function check(a: number[], n: number) {
  const b = [...a].filter((x) => x != n);
  a.length = removeElement(a, n);
  assert.deepEqual(a, b);
}

describe('remove element', () => {
  it('should pass standard cases', () => {
    check([3, 2, 2, 3], 3);
    check([0, 1, 2, 2, 3, 0, 4, 2], 2);
  });

  it('should handle special cases', () => {
    check([], 2);
  });
});
