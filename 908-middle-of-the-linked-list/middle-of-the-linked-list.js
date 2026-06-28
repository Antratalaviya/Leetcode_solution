/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function (head) {
    let total = 1;

    let temp = head;
    while (temp.next !== null) {
        total++;
        temp = temp.next;
    }

    let middle = Math.floor(total / 2);

    let curr = head;
    while (middle > 0) {
        middle--;
        curr = curr.next;
    }
    return curr
};