/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function (word1, word2) {
    const m = word1?.length;
    const n = word2?.length;
    let prev = new Array(n + 1).fill(0);
    let curr = new Array(n + 1).fill(0);

    for (let i = 1; i <= n; i++) {
        prev[i] = i
    }

    for (let i = 1; i <= m; i++) {
        curr[0] = i;
        for (let j = 1; j <= n; j++) {
            if (word1[i - 1] === word2[j - 1]) {
                curr[j] = prev[j - 1];
            } else {
                curr[j] = Math.min(prev[j - 1], prev[j], curr[j - 1]) + 1
            }
        }
        prev = curr;
        curr = new Array(n + 1).fill(0);
    }

    return prev[n];
};