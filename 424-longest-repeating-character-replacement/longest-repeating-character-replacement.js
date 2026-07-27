/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function (s, k) {
    let maxFreq = 0, maxLen = 0, l = 0;
    let freq = {};

    for (let r = 0; r < s?.length; r++) {
        freq[s[r]] = (freq[s[r]] || 0) + 1;

        maxFreq = Math.max(maxFreq, freq[s[r]]);

        if ((r - l + 1) - maxFreq > k) {
            freq[s[l]]--;
            l++
        }
        maxLen = Math.max(maxLen, r - l + 1);
    }
    return maxLen;
};