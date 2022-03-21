/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
 var postorder = function(root, arr = []) {
    if(!root) return arr;
    for(let child of root.children) {
        postorder(child, arr);
    }
    arr.push(root.val);
    return arr;
};

// URL: https://leetcode.com/problems/n-ary-tree-postorder-traversal/

// Runtime: 96 ms, faster than 73.32% of JavaScript online submissions for N-ary Tree Postorder Traversal.
// Memory Usage: 45.8 MB, less than 38.40% of JavaScript online submissions for N-ary Tree Postorder Traversal.