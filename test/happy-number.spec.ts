import * as assert from 'assert';
import { isHappy } from '../src/happy-number';

describe('happy number', () => {
  it('should pass standard cases', () => {
    assert.equal(isHappy(19), true);
  });

  it('should handle special cases', () => {
    assert.equal(isHappy(123), false);
  });
});
