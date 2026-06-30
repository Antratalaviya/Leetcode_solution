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
const getMiddle = (head) => {
    if (!head || !head.next) return head;

    let fast = head.next;
    let slow = head;

    while (fast && fast.next) {
        fast = fast.next.next;
        slow = slow.next;
    }
    return slow;
}
const mergeTwoSortedList = (list1, list2) => {
    let dummyNode = new ListNode(-1);

    let temp = dummyNode;

    while (list1 && list2) {
        if (list1.val < list2.val) {
            temp.next = list1;
            list1 = list1.next;
        } else {
            temp.next = list2;
            list2 = list2.next;
        }
        temp = temp.next;
    }
    if (list1) {
        temp.next = list1;
    }
    if (list2) {
        temp.next = list2;
    }

    return dummyNode.next;
}
var sortList = function (head) {
    if (!head || !head.next) return head;

    let middle = getMiddle(head);
    
    let left = head;
    let right = middle.next;
    middle.next = null;

    left = sortList(left);
    right = sortList(right);

    return mergeTwoSortedList(left, right);
};