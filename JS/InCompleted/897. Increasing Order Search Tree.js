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

