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

var doubleIt = function (head) {
    const double = (node) => {
        if (!node) return 0;

        let doubleVal = node.val * 2 + double(node.next);
        node.val = doubleVal % 10;
        return Math.floor(doubleVal / 10);
    }

    let carry = double(head);
    if (carry > 0) {
        head = new ListNode(carry, head);
    }
    return head;
};