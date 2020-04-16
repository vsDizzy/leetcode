// https://leetcode.com/problems/zigzag-conversion

export function convert(s: string, numRows: number): string {
  if (numRows == 1) {
    return s;
  }

  let r = '';
  const step = numRows * 2 - 2;
  for (let row = 0; row < numRows; row++) {
    for (let i = 0; i + row < s.length; i += step) {
      r += s[row + i];
      if (row != 0 && row != numRows - 1 && i + step - row < s.length) {
        r += s[i + step - row];
      }
    }
  }

  return r;
}
