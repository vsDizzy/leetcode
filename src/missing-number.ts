// https://leetcode.com/problems/missing-number

export function missingNumber(nums: number[]) {
  const s = new Set(nums);
  for (let i = 0; i <= nums.length; i++) {
    if (s.has(i)) {
      continue;
    }

    return i;
  }
}
