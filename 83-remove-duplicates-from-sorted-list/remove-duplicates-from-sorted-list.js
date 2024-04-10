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
var deleteDuplicates = function (head) {
    let curr_val = null;
    let curr = head;
    let prev = null;
    while (curr) {
        if (curr.val !== curr_val) {
            curr_val = curr.val;
            prev = curr;
        } else {
            prev.next = curr.next;
        }
        curr = curr.next;
    }
    return head;
};