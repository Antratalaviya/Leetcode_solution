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
var oddEvenList = function (head) {
    let oddHead = null, oddTail = null;
    let evenHead = null, evenTail = null;

    let curr = head;
    let index = 0;
    while (curr) {
        if (index % 2 === 0) {
            if (!evenHead) {
                evenHead = evenTail = curr;
            } else {
                evenTail.next = curr;
                evenTail = curr;
            }
            index++;
        } else {
            if (!oddHead) {
                oddHead = oddTail = curr;
            } else {
                oddTail.next = curr;
                oddTail = curr;
            }
            index = 0;
        }
        curr = curr.next;
    }

    if (!evenHead) {
        return oddHead;
    }

    if (!oddHead) {
        return evenHead;
    }

    evenTail.next = oddHead;
    oddTail.next = null;

    return evenHead;

};