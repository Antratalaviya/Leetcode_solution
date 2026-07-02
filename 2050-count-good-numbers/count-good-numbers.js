/**
 * @param {number} n
 * @return {number}
 */
let MOD = BigInt(10 ** 9 + 7);
// const helper = (index, n) => {
//     if (index === n) {
//         return 1;
//     }

//     let result = 0;
//     if (index % 2 === 0) {
//         let evenDigits = [0, 2, 4, 6, 8];
//         for (let digit of evenDigits) {
//             result = (result + helper(index + 1, n)) % MOD;
//         }
//     } else {
//         let primeDigits = [2, 3, 5, 7];
//         for (let digit of primeDigits) {
//             result = (result + helper(index + 1, n)) % MOD;
//         }
//     }
//     return result;

// }

const power = (n, pow) => {
    let base = BigInt(n);
    let res = 1n;
    pow = BigInt(pow)

    while (pow > 0) {
        if (pow % 2n === 1n) {
            res = (res * base) % MOD;
        }
        base = (base * base) % MOD;
        pow = pow / 2n;
    }
    return res;
}
var countGoodNumbers = function (n) {
    // return helper(0, n); // TTL Exceeded

    const even = Math.ceil(n / 2);
    const odd = Math.floor(n / 2);

    return Number((power(5, even) * power(4, odd)) % MOD);
    // return helper(n);

};