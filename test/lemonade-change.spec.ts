import * as assert from 'assert';
import { lemonadeChange } from '../src/lemonade-change';

describe('lemonade change', () => {
  it('should pass standard cases', () => {
    assert.equal(lemonadeChange([5, 5, 5, 10, 20]), true);
    assert.equal(lemonadeChange([5, 5, 10]), true);
    assert.equal(lemonadeChange([10, 10]), false);
    assert.equal(lemonadeChange([5, 5, 10, 10, 20]), false);
  });

  it('should handle special cases', () => {
    assert.equal(lemonadeChange([]), true);
  });
});
