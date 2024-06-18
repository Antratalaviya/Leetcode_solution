/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if(!strs.length) return '';

    let prefix = strs[0];
    for(let str of strs){
        while(str.indexOf(prefix)!==0){
            prefix = prefix.slice(0, -1);
            if(prefix === '') return "";
        }
    }
    return prefix
};