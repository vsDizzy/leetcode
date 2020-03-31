import * as assert from 'assert';
import { addStrings } from '../src/add-strings';

describe('add strings', () => {
  it('should pass standard cases', () => {
    assert.equal(addStrings('0', '0'), '0');
  });

  it('should handle special cases', () => {
    assert.equal(addStrings('123', '40'), '163');
    assert.equal(addStrings('9', '9'), '18');
    assert.equal(addStrings('1', '9'), '10');
  });
});
