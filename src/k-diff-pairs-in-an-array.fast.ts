// https://leetcode.com/problems/k-diff-pairs-in-an-array

export function findPairs(nums: number[], k: number): number {
  if (k < 0) {
    return 0;
  }

  let r = 0;
  if (!k) {
    const m = new Map();
    for (const num of nums) {
      if (m.has(num)) {
        if (m.get(num)) {
          r++;
          m.set(num, false);
        }
      } else {
        m.set(num, true);
      }
    }
  } else {
    const m = new Set(nums);
    for (const i of m.keys()) {
      if (m.has(i + k)) {
        r++;
      }
    }
  }

  return r;
}
