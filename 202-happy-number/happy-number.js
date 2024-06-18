/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
    let slow = n;
    let fast = n;

    do {
        slow = square(slow);
        fast = square(square(fast));
    } while (slow !== fast);

    return slow === 1;
};

function square(n) {
    let sum = 0;
    while (n > 0) {
        let digit = n % 10;
        sum += (digit * digit);
        n = Math.floor(n / 10);
    }

    return sum;
}