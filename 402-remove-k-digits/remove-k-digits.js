/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
var removeKdigits = function (num, k) {
    if (k === num?.length) return "0";

    let st = [];
    for (let i = 0; i < num?.length; i++) {
        while (st?.length && k > 0 && st[st?.length - 1] > num[i]) {
            st.pop();
            k--;
        }
        st.push(num[i]);
    }

    while (st?.length && k > 0) {
        st.pop();
        k--;
    }

    let res = "";

    while (st?.length) {
        res += st.pop();
    }

    res = res.replace(/0+$/, "");

    res = res.split('').reverse().join('');

    if (!res || !res.length) {
        return "0"
    }
    return res;
};

//Algo
/**
initialize an empty stack
loop through all digits in an num
while stack is not empty and k is greater than zero
    pop all element which is greater than curr element
    k--  
push curr element
stack is result(make it reverse)
remove leading zero after reverse 

//edge cases
k === num?.length
    return 0;
k > 0 after traversal
    remove element from end; 
if res is ""
    return 0;          
 */