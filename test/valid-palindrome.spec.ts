import * as assert from 'assert';
import { isPalindrome } from '../src/valid-palindrome';

describe('valid palindrome', () => {
  it('should pass standard cases', () => {
    assert.equal(isPalindrome('A man, a plan, a canal: Panama'), true);
    assert.equal(isPalindrome('race a car'), false);
  });

  it('should handle special cases', () => {
    assert.equal(isPalindrome(''), true);
    assert.equal(isPalindrome('a$'), true);
    assert.equal(isPalindrome('   a!@A$'), true);
    assert.equal(isPalindrome('   a!@Aa$'), true);
  });
});
