/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function (version1, version2) {
    let v1 = version1.split('.').map((e) => Number(e));
    let v2 = version2.split('.').map((e) => Number(e));
    let i = 0;

    while (v1.length < v2.length) {
        v1[v1.length] = 0;
    }
    while (v2.length < v1.length) {
        v2[v2.length] = 0;
    }
   
    while (i < v1.length) {
        if (v1[i] < v2[i]) {
            return -1;
        }
        if (v1[i] > v2[i]) {
            return 1;
        }
        i++
    }
    return 0;
};