// getValsまでのロジックは考え付いていた。

var increasingBST = function(root) {
	const arr = []

	function getVals(node){
		if(!node) return
		getVals(node.left)
		arr.push(node.val)
		getVals(node.right)
	}

	getVals(root)

	const tree = new TreeNode()
	let curr = tree
	for(let i=0; i< arr.length; i++){
		curr.right = new TreeNode(arr[i]);
		curr = curr.right
	}

	return tree.right
};

// Runtime: 88 ms, faster than 47.35% of JavaScript online submissions for Increasing Order Search Tree.
// Memory Usage: 42.9 MB, less than 47.35% of JavaScript online submissions for Increasing Order Search Tree.

// my answer
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
 * @return {TreeNode}
 */
 var increasingBST = function(root) {
    const arr = [];
    const recursive1 = (root) => {
        if(!root) return;
        recursive1(root.left);
        arr.push(root.val);
        recursive1(root.right);
    }
    recursive1(root);
    
    let node = new TreeNode();
    const recursive2 = (root, valArr) => {
        if(!valArr.length) return;
        root.right = new TreeNode(valArr[0]);
        recursive2(root.right, valArr.slice(1));
    }
    recursive2(node, arr);
    return node.right;
};

// Runtime: 96 ms, faster than 32.45% of JavaScript online submissions for Increasing Order Search Tree.
// Memory Usage: 43.9 MB, less than 9.93% of JavaScript online submissions for Increasing Order Search Tree.

