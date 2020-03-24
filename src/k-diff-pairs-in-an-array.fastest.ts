// https://leetcode.com/problems/k-diff-pairs-in-an-array

export function findPairs(nums: number[], k: number): number {
  if (k < 0) {
    return 0;
  }

  if (k) {
    let r = 0;
    const m = new Set(nums);
    for (const i of m.keys()) {
      if (m.has(i + k)) {
        r++;
      }
    }

    return r;
  }

  const s1 = new Set();
  const s2 = new Set();
  for (const num of nums) {
    if (!s2.has(num)) {
      if (s1.has(num)) {
        s2.add(num);
      } else {
        s1.add(num);
      }
    }
  }

  return s2.size;
}
