import * as assert from 'assert';
import { convert } from '../src/zigzag-conversion';

describe('zigzag conversion', () => {
  it('should pass standard cases', () => {
    assert.equal(convert('PAYPALISHIRING', 3), 'PAHNAPLSIIGYIR');
    assert.equal(convert('PAYPALISHIRING', 4), 'PINALSIGYAHRPI');
  });

  it('should handle special cases', () => {
    assert.equal(convert('PAYPALISHIRING', 1), 'PAYPALISHIRING');
  });
});
