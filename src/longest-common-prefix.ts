// https://leetcode.com/problems/longest-common-prefix

export function longestCommonPrefix(strs: string[]): string {
  const word = strs[0];
  if (!word) {
    return '';
  }

  if (strs.length == 1) {
    return word;
  }

  let n;
  outer: for (n = 0; n < word.length; n++) {
    const expectedChar = word[n];

    for (let i = 1; i < strs.length; i++) {
      const word = strs[i];

      if (word[n] != expectedChar) {
        break outer;
      }
    }
  }

  return word.substr(0, n);
}
