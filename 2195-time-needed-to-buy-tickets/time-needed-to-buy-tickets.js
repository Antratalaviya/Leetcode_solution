/**
 * @param {number[]} tickets
 * @param {number} k
 * @return {number}
 */
var timeRequiredToBuy = function (tickets, k) {
    let time = 0;
    let i = 0;
    while (tickets[k] > 0) {
        if (tickets[i]) {
            tickets[i] -= 1;
            time++;
        }
        i = (i + 1) % tickets.length;
    }
    return time;
};