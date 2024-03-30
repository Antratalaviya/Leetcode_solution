/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
let memo = [];
function match(s, p, i, j) {
    if (!memo[i]) memo[i] = [];
    if (memo[i][j] !== undefined) return memo[i][j];
    if (j === p.length) {
        return memo[i][j] = i === s.length;
    }
    else if (j === p.length - 1 || p[j + 1] !== "*") {
        return memo[i][j] = (p[j] === "." || s[i] === p[j]) && match(s, p, i + 1, j + 1);
    }
    else {
        return memo[i][j] = match(s, p, i, j + 2) || (p[j] === "." && i < s.length || s[i] === p[j]) && match(s, p, i + 1, j);
    }
}
var isMatch = function (s, p) {
    memo = [];
    return match(s, p, 0, 0);
};
























    // let m = s.length;
    // let n = p.length;
    // let dp = new Array(m + 1).fill().map(() => new Array(n + 1).fill(false));

    // // empty pattern matches empty string
    // dp[0][0] = true;

    // // fill the first row
    // for (let j = 1; j <= n; j++) {
    //     if (p[j - 1] === "*") {
    //         dp[0][j] = dp[0][j - 2]; // means zero occurance matches
    //     }
    // }
    // // fill ramaining cells
    // for (let i = 1; i <= m; i++) {
    //     for (let j = 1; j <= n; j++) {
    //         if (s[i - 1] === p[j - 1] || p[j - 1] === ".") {
    //             dp[i][j] = dp[i - 1][j - 1];
    //         } else if (p[j - 1] === "*") {
    //             dp[i][j] = dp[i][j - 2] // zero occurance matches
    //             if (s[i - 1] === p[j - 2] || p[j - 2] === ".") {
    //                 dp[i][j] = dp[i][j] || dp[i - 1][j];  //one or more occurance
    //             }
    //         }
    //     }
    // }

    // return dp[m][n];