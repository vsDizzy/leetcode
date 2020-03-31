// https://leetcode.com/problems/add-strings

export function addStrings(num1: string, num2: string): string {
  let s = '';
  let c = 0;
  for (
    let i = num1.length - 1, j = num2.length - 1;
    i >= 0 || j >= 0;
    i--, j--
  ) {
    const a = i >= 0 ? Number(num1[i]) : 0;
    const b = j >= 0 ? Number(num2[j]) : 0;
    const d = a + b + c;
    c = d > 9 ? 1 : 0;
    s = (d % 10) + s;
  }

  if (c) {
    s = 1 + s;
  }

  return s;
}
