/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function (asteroids) {
    //initialize an empty stack
    //if postive then push stack
    //if curr ele is neg then
    //    while  pop stack top until top > 0 & top < ele;
    //    if equl top with curr? pop stack
    //    if stack is empty || top is neg ? push curr ele to stack

    let st = [];
    for (let i = 0; i < asteroids?.length; i++) {
        if (asteroids[i] > 0) {
            st.push(asteroids[i]);
        } else {
            while (st?.length && st[st?.length - 1] > 0 && st[st?.length - 1] < Math.abs(asteroids[i])) {
                st.pop();
            }
            if (st?.length && st[st?.length - 1] === Math.abs(asteroids[i])) {
                st.pop();
            } else if (!st.length || st[st?.length - 1] < 0) {
                st.push(asteroids[i]);
            }
        }
    }
    return st;
};