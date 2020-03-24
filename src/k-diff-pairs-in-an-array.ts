// https://leetcode.com/problems/k-diff-pairs-in-an-array

export function findPairs(nums: number[], k: number): number {
  if (nums.length < 2) {
    return 0;
  }

  const s = new Set();
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      const a = nums[i];
      const b = nums[j];
      if (Math.abs(a - b) == k) {
        s.add(Math.min(a, b));
      }
    }
  }
  return s.size;
}
