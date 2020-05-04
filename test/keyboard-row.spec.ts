import * as assert from 'assert';
import { findWords } from '../src/keyboard-row';

describe('keyboard row', () => {
  it('should pass standard cases', () => {
    assert.deepEqual(findWords(['Hello', 'Alaska', 'Dad', 'Peace']), [
      'Alaska',
      'Dad',
    ]);
  });

  it('should handle special cases', () => {
    assert.deepEqual(findWords(['A']), ['A']);
  });
});
