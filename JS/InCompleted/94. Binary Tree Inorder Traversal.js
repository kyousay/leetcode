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
 var inorderTraversal = (root) => {
    const res = [];
    const helper = (root, res) => {
        if(!root) return;
        helper(root.left, res);
        res.push(root.val);
        helper(root.right, res);
    }
    helper(root, res);
    return res;
};

// URL: https://leetcode.com/problems/binary-tree-inorder-traversal/

// Runtime: 67 ms, faster than 75.27% of JavaScript online submissions for Binary Tree Inorder Traversal.
// Memory Usage: 42.3 MB, less than 48.79% of JavaScript online submissions for Binary Tree Inorder Traversal.

// recursive2
var inorderTraversal = function(root) {
    if(!root) return [];
    
    const left = inorderTraversal(root.left);
    const right = inorderTraversal(root.right);

    return left.concat([root.val]).concat(right);
};

// Runtime: 83 ms, faster than 47.42% of JavaScript online submissions for Binary Tree Inorder Traversal.
// Memory Usage: 42.3 MB, less than 38.47% of JavaScript online submissions for Binary Tree Inorder Traversal.
