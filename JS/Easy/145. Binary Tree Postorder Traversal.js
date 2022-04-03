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
 var postorderTraversal = function(root) {
    const res = [];
    const recursive = (root) => {
        if(!root) return;
        recursive(root.left);
        recursive(root.right);
        res.push(root.val);
    }
    recursive(root);
    return res;
};

// URL: https://leetcode.com/problems/binary-tree-postorder-traversal/

// Runtime: 64 ms, faster than 82.89% of JavaScript online submissions for Binary Tree Postorder Traversal.
// Memory Usage: 42.6 MB, less than 6.40% of JavaScript online submissions for Binary Tree Postorder Traversal.


// another answer
var postorderTraversal = function(root) {
    if(!root) return [];
    return [].concat(
        postorderTraversal(root.left),
        postorderTraversal(root.right),
        root.val
    );
};

// Runtime: 59 ms, faster than 92.15% of JavaScript online submissions for Binary Tree Postorder Traversal.
// Memory Usage: 42.1 MB, less than 72.95% of JavaScript online submissions for Binary Tree Postorder Traversal.