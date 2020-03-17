// https://leetcode.com/problems/lemonade-change

export function lemonadeChange(bills: number[]): boolean {
  let fives = 0;
  let tens = 0;

  for (const bill of bills) {
    switch (bill) {
      case 5:
        fives++;
        break;
      case 10:
        tens++;

        if (fives <= 0) {
          return false;
        }

        fives--;
        break;
      case 20:
        if (tens <= 0) {
          if (fives < 3) {
            return false;
          }

          fives -= 3;
        } else {
          tens--;

          if (fives <= 0) {
            return false;
          }

          fives--;
        }
    }
  }

  return true;
}
