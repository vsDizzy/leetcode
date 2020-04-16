// https://leetcode.com/problems/jewels-and-stones

export function numJewelsInStones(J, S) {
  const s = new Set(J);
  let res = 0;
  for (const n of S) {
    if (s.has(n)) {
      res++;
    }
  }

  return res;
}
