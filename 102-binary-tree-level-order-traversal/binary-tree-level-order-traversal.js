/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
    let res = [];
    let queue = [root]

    while (queue[0]) {
        let levelEle = [];
        let levelSize = queue.length;

        for (let i = 0; i < levelSize; i++) {
            let curr = queue.shift();
            levelEle.push(curr.val);

            if (curr.left) queue.push(curr.left);
            if (curr.right) queue.push(curr.right);
        }

        res.push(levelEle);
    }

    return res;
};