/**
 * @param {number[]} score
 * @return {string[]}
 */
var findRelativeRanks = function (score) {
    let length = score.length;
    let answer = new Array(length);
    let scoreWithIndex = score.map((score, index) => [score, index]);

    scoreWithIndex.sort((a, b) => b[0] - a[0]);

    let rank = ['Gold Medal', "Silver Medal", 'Bronze Medal'];

    for (let i = 0; i < length; i++) {
        let idx = scoreWithIndex[i][1];
        if (i < 3) {
            answer[idx] = rank[i];
        } else {
            answer[idx] = String(i + 1);
        }
    }

    return answer;
};