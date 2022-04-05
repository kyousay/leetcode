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
 var preorderTraversal = function(root) {
    let res = [];
    const recursive = (root) => {
        if(!root) return;
        res.push(root.val);
        recursive(root.left);
        recursive(root.right);
    }
    recursive(root);
    return res;
};

// URL: https://leetcode.com/problems/binary-tree-preorder-traversal/

// Runtime: 96 ms, faster than 23.96% of JavaScript online submissions for Binary Tree Preorder Traversal.
// Memory Usage: 42.3 MB, less than 51.79% of JavaScript online submissions for Binary Tree Preorder Traversal.
