// https://leetcode.com/problems/remove-element

export function removeElement(nums: number[], val: number): number {
  let r = 0;
  let x = 0;
  for (let i = 0; i <= nums.length - 1; i++) {
    const n = nums[i];
    if (n == val) {
      r++;
      continue;
    }

    nums[x++] = n;
  }
  const res = nums.length - r;
  return res;
}
