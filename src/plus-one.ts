// https://leetcode.com/problems/plus-one

export function plusOne(digits: number[]): number[] {
  const r = [];

  function go(i = digits.length - 1, carry = true): void {
    if (i >= 0) {
      const s = digits[i] + +carry;
      const c = s >= 10;
      go(i - 1, c);
      r.push(c ? 0 : s);
    } else {
      if (carry) {
        r.push(1);
      }
    }
  }

  go();

  return r;
}
