// https://leetcode.com/problems/play-with-chips

export function minCostToMoveChips(chips: number[]): number {
  let even = 0;
  let odd = 0;
  for (let i = 0; i < chips.length; i++) {
    if (chips[i] % 2 == 0) {
      even++;
    } else {
      odd++;
    }
  }

  return Math.min(even, odd);
}
