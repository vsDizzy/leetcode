// https://leetcode.com/problems/happy-number

export function isHappy(n: number): boolean {
  function getSum(n: number): number {
    let sum = 0;
    while (n) {
      const d = n % 10;
      sum += d * d;
      n = Math.trunc(n / 10);
    }
    return sum;
  }

  const v = {};
  while (n != 1) {
    n = getSum(n);
    if (v[n]) {
      return false;
    }
    v[n] = true;
  }

  return true;
}
