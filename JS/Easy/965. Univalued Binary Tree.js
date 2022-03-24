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
 * @return {boolean}
 */
 var isUnivalTree = function(root) {
    const set = new Set();
    const helper = (root) => {
        if(!root) return;
        set.add(root.val);
        helper(root.left);
        helper(root.right);
    }
    helper(root);
    return set.size === 1;
};

// URL: https://leetcode.com/problems/univalued-binary-tree/

// Runtime: 107 ms, faster than 16.56% of JavaScript online submissions for Univalued Binary Tree.
// Memory Usage: 43.5 MB, less than 5.84% of JavaScript online submissions for Univalued Binary Tree.

// another answer
var isUnivalTree = function(root) {
    
    let bLeftTrue = !root.left || (root.left.val == root.val && isUnivalTree(root.left));
    
    let bRightTrue = !root.right || (root.right.val == root.val && isUnivalTree(root.right));
    
    return bLeftTrue && bRightTrue
};

// Runtime: 94 ms, faster than 32.47% of JavaScript online submissions for Univalued Binary Tree.
// Memory Usage: 42.6 MB, less than 56.82% of JavaScript online submissions for Univalued Binary Tree.
