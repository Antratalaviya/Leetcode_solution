/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
    let dequeue = [];
    let res = [];

    for (let i = 0; i < nums?.length; i++) {
        if (dequeue.length && dequeue[0] <= i - k) {
            dequeue.shift()
        };

        while (dequeue.length && nums[dequeue[dequeue?.length - 1]] < nums[i]) {
            dequeue.pop();
        }
        dequeue.push(i);

        if (i >= k - 1) {
            res.push(nums[dequeue[0]]);
        }
    }
    return res;
};

//Algo
/**
Initialize an empty dequeue and result list
Loop through all elements of arr froms tart to end
Remove the front of dequeu if it's outside of window
Remove all ele from back of dequeue if is smaller than curr element
Insert element at back of the dequeue
if window has atleast k element
    add front of dequeue in result list.
 */