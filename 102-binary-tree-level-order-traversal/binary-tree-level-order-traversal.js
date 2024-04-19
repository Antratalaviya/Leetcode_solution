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

    function bfs(node, level) {
        if (!node) return [];

        if (!res[level]) {
            res.push([node.val]);
        } else {
            res[level].push(node.val);
        }

        bfs(node.left, level + 1);
        bfs(node.right, level + 1);
    }
    bfs(root, 0);
    return res;
};

/**
    if (!root) return [];

    let res = [];
    let queue = [root];

    while (queue[0]) {
        let levelEle = [];
        let levelSize = queue.length;

        for (let i = 0; i < levelSize; i++) {
            let curr = queue.shift();
            levelEle.push(curr.val);

            if (curr.left) queue.push(curr.left);
            if (curr.right) queue.push(curr.right);
        }

        if (levelEle) res.push(levelEle);
    }

    return res;
 */