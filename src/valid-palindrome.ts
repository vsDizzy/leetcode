// https://leetcode.com/problems/valid-palindrome

export function isPalindrome(s: string): boolean {
  function isSymbol(char) {
    return (
      (char >= '0' && char <= '9') ||
      (char.toLowerCase() >= 'a' && char.toLowerCase() <= 'z')
    );
  }

  let i = 0;
  let j = s.length - 1;
  while (i < j) {
    const b = s[i];
    if (!isSymbol(b)) {
      i++;
      continue;
    }

    const e = s[j];
    if (!isSymbol(e)) {
      j--;
      continue;
    }

    if (b.toLowerCase() != e.toLowerCase()) {
      return false;
    }

    i++;
    j--;
  }

  return true;
}
