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
 * @return {number}
 */
 var sumRootToLeaf = function(root, val = '0') {
    if(!root) return 0;
    const value = val + root.val;
    const left = sumRootToLeaf(root.left, value);
    const right = sumRootToLeaf(root.right, value);
    if(!left && !right) return parseInt(value, 2)
    return left + right;
};

// Runtime: 76 ms, faster than 91.26% of JavaScript online submissions for Sum of Root To Leaf Binary Numbers.
// Memory Usage: 41 MB, less than 43.17% of JavaScript online submissions for Sum of Root To Leaf Binary Numbers.

// URL: https://leetcode.com/problems/sum-of-root-to-leaf-binary-numbers/