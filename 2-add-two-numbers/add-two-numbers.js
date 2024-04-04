/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2, carry = 0) {
    if (!l1 && !l2 && !carry) return null;
    let total = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + carry;
    carry = parseInt(total / 10);
    return new ListNode(total % 10, addTwoNumbers(l1?.next, l2?.next, carry));

};

    // let dummyHead = new ListNode(0)
    // let current = dummyHead
    // let carry = 0
    // while (l1 || l2) {
    //     let x = l1 ? l1.val : 0
    //     let y = l2 ? l2.val : 0
    //     let sum = x + y + carry
    //     carry = Math.floor(sum/10)
    //     current.next = new ListNode(sum%10)
    //     current = current.next

    //     if(l1) l1=l1.next
    //     if(l2) l2= l2.next
    // }
    // if(carry>0){
    //     current.next= new ListNode(carry)
    // }
    // return dummyHead.next