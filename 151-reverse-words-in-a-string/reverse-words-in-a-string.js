/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
    s = s.split(' ');
    let res = []
    for(let i=s.length-1;i>=0;i--){
        if(s[i]!==''){
            res.push(s[i]);
        }
    }
    return res.join(' ')
};

 // s = s.trim()
    // let left = 0
    // let right = s.length - 1
    // let temp = ''
    // let ans = ''
    // while (left <= right) {
    //     let ch = s[left]
    //     if (ch !== ' ') {
    //         temp += ch
    //     } else if (ch === ' ') {
    //         if (ans !== '' && temp !== '') {
    //             ans = temp + ' ' + ans
    //         } else if(ans === ''){
    //             ans = temp
    //         }
    //         temp = ''
    //     }
    //     left++
    // }
    // if (temp !== '') {
    //     if (ans !== '') ans = temp + ' ' + ans
    //     else ans = temp
    //     return ans
    // }