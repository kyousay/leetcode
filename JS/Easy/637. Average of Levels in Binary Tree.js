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
 * @return {number[]}
 */
 var averageOfLevels = function(root) {
    const arr = [];
    const helper = (root, level = 0) => {
        if(!root) return;
        Array.isArray(arr[level]) ? arr[level].push(root.val) : arr[level] = [root.val];
        helper(root.left, level + 1);
        helper(root.right, level + 1);
    }
    helper(root);
    return arr.map((ar) => (ar.reduce((acc, cur) => acc + cur, 0) / ar.length).toFixed(5));
};

// URL: https://leetcode.com/problems/average-of-levels-in-binary-tree/

// Runtime: 104 ms, faster than 60.80% of JavaScript online submissions for Average of Levels in Binary Tree.
// Memory Usage: 47.7 MB, less than 21.61% of JavaScript online submissions for Average of Levels in Binary Tree.
