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
 const checkTree = (root) => root.left.val + root.right.val === root.val;

//  URL: https://leetcode.com/problems/root-equals-sum-of-children/

// Runtime: 71 ms, faster than 57.14% of JavaScript online submissions for Root Equals Sum of Children.
// Memory Usage: 42.8 MB, less than 85.71% of JavaScript online submissions for Root Equals Sum of Children.