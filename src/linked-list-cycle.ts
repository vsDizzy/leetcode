// https://leetcode.com/problems/linked-list-cycle

export class ListNode {
  next: ListNode = null;
  constructor(public val: number) {}

  static create(nums: number[], pos: number): ListNode {
    let head: ListNode;
    let cycle: ListNode = null;
    let prev: ListNode = null;
    let node: ListNode;
    for (let i = 0; i < nums.length; i++) {
      const num = nums[i];
      node = new ListNode(num);
      if (prev) {
        prev.next = node;
      } else {
        head = node;
      }
      prev = node;

      if (i == pos) {
        cycle = node;
      }
    }

    if (cycle) {
      node.next = cycle;
    }

    return head;
  }
}

export function hasCycle(head: ListNode): boolean {
  if (!head) {
    return false;
  }

  const s = new Set<ListNode>();
  let node = head;
  while (node) {
    if (s.has(node)) {
      return true;
    }

    s.add(node);

    node = node.next;
  }

  return false;
}
