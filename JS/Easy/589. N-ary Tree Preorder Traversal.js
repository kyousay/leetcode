* // Definition for a Node.
* function Node(val, children) {
*    this.val = val;
*    this.children = children;
* };
*/

/**
* @param {Node|null} root
* @return {number[]}
*/
var preorder = function(root) {
   const arr = [];
   const recursive = (root) => {
       if(!root) return arr;
       arr.push(root.val);
       for(let i = 0; i < root.children.length; i++) {
           recursive(root.children[i]);
       }
   }
   recursive(root);
   return arr;
};

// URL: https://leetcode.com/problems/n-ary-tree-preorder-traversal/submissions/

// Runtime: 108 ms, faster than 52.64% of JavaScript online submissions for N-ary Tree Preorder Traversal.
// Memory Usage: 45.5 MB, less than 44.26% of JavaScript online submissions for N-ary Tree Preorder Traversal.

// another answer1
// flatやflatMapを使う発想がなかった
function preorder(root) {
    return root == null ? [] : [ root.val, ...root.children.flatMap(child => preorder(child)) ]
};

// Runtime: 190 ms, faster than 5.10% of JavaScript online submissions for N-ary Tree Preorder Traversal.
// Memory Usage: 49.2 MB, less than 13.30% of JavaScript online submissions for N-ary Tree Preorder Traversal.

// another answer2
var preorder = function(root, order = []) {
    if (!root) return order;
    order.push(root.val)
    for (let child of root.children) preorder(child, order)
    return order;
  };

// Runtime: 84 ms, faster than 84.15% of JavaScript online submissions for N-ary Tree Preorder Traversal.
// Memory Usage: 45.4 MB, less than 55.74% of JavaScript online submissions for N-ary Tree Preorder Traversal.