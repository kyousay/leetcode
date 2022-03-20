/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number}
 */
 var maxDepth = function(root, num = 1) {
    if(!root) return 0;
    if(!root.children.length) return num;
    let childDepth = [];
    for(let child of root.children) {
        childDepth.push(maxDepth(child, num + 1));
    }
    return Math.max(...childDepth);
};

// URL: https://leetcode.com/problems/maximum-depth-of-n-ary-tree/

// Runtime: 87 ms, faster than 73.15% of JavaScript online submissions for Maximum Depth of N-ary Tree.
// Memory Usage: 46.1 MB, less than 15.86% of JavaScript online submissions for Maximum Depth of N-ary Tree.

// another answer1
var maxDepth = function(root) {
    if (!root) return 0;
    let maximum = 0;
    const dfs = (root, currentCount) => {
        if (root.children.length === 0) {
            maximum = Math.max(currentCount + 1, maximum)
        }
        currentCount += 1;
        for (var i = 0; i <= root.children.length - 1; i++) {
            dfs(root.children[i], currentCount);
        }
    }

    dfs(root, 0);
    return maximum;
};

// Runtime: 95 ms, faster than 64.71% of JavaScript online submissions for Maximum Depth of N-ary Tree.
// Memory Usage: 44.6 MB, less than 66.24% of JavaScript online submissions for Maximum Depth of N-ary Tree.



// another answer2
 var maxDepth = function(root) {
    if (!root) return 0;
    const children = root.children || [];
    const max = 0;
    
    for (let i = 0; i < children.length; ++ i) {
        max = Math.max(max, maxDepth(children[i]));
    }
    
    return 1 + max;
};