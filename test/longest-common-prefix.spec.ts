import * as assert from 'assert';
import { longestCommonPrefix } from '../src/longest-common-prefix';

describe('longest common prefix', () => {
  it('should pass standard cases', () => {
    assert.equal(longestCommonPrefix(['flower', 'flow', 'flight']), 'fl');
    assert.equal(longestCommonPrefix(['dog', 'racecar', 'car']), '');
  });

  it('should handle special cases', () => {
    assert.equal(longestCommonPrefix([]), '');
    assert.equal(longestCommonPrefix(['a']), 'a');
    assert.equal(longestCommonPrefix(['c', 'c']), 'c');
  });
});
