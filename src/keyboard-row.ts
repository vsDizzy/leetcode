// https://leetcode.com/problems/keyboard-row

export function findWords(words: string[]): string[] {
  const rows = ['qwerttyuiop', 'asdfghjkl', 'zxcvbnm'];

  return words.filter((word) => {
    let letter = word[0].toLowerCase();
    const row = rows.find((r) => r.includes(letter));

    for (let i = 1; i < word.length; i++) {
      letter = word[i].toLowerCase();
      if (!row.includes(letter)) {
        return false;
      }
    }

    return true;
  });
}
