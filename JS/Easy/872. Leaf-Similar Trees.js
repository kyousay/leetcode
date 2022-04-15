/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
 var leafSimilar = function(root1, root2) {
    const recursive = (root, arr = []) => {
        if(!root) return arr;
        if(!root.left && !root.right) {
            arr.push(root.val);
            return arr;
        };
        recursive(root.left, arr);
        recursive(root.right, arr);
        return arr;
    }
    const arr1 = recursive(root1);
    const arr2 = recursive(root2);
    return JSON.stringify(arr1) === JSON.stringify(arr2);
};

// URL: https://leetcode.com/problems/leaf-similar-trees/

// Runtime: 69 ms, faster than 80.95% of JavaScript online submissions for Leaf-Similar Trees.
// Memory Usage: 44.5 MB, less than 58.01% of JavaScript online submissions for Leaf-Similar Trees.