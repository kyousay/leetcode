/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var middleNode = function(head) {
    const arr = [];
    const recursive1 = (root) => {
        if(!root) return;
        arr.push(root.val);
        recursive1(root.next);        
    }
    recursive1(head);
    const half = Math.floor(arr.length / 2);
    const middleNode = new ListNode();
    const recursive2 = (node, valArr) => {
        if(!valArr.length) return;
        node.next = new ListNode(valArr[0]);
        recursive2(node.next, valArr.slice(1));
    }
    recursive2(middleNode, arr.slice(half));
    return middleNode.next;
};

// URL: https://leetcode.com/problems/middle-of-the-linked-list/

// Runtime: 67 ms, faster than 75.33% of JavaScript online submissions for Middle of the Linked List.
// Memory Usage: 42.3 MB, less than 22.66% of JavaScript online submissions for Middle of the Linked List.

// another answer1
// 1.ひとまず長さを数える
// 2.currentの再代入で調整する
// 3.長さ以上になったらcurrentを返す

const middleNode = head => {
	if (!head) return;

	let length = 0;
	let current = head;

	while (current) {
		length++;
		current = current.next;
	}

	current = head;
	const mid = Math.floor(length / 2);
	let idx = 0;

	while (idx++ < mid) {
		current = current.next;
	}

	return current;
};

// Runtime: 67 ms, faster than 75.33% of JavaScript online submissions for Middle of the Linked List.
// Memory Usage: 42.5 MB, less than 10.78% of JavaScript online submissions for Middle of the Linked List.

// another answer2
const middleNode = head => {
	let current = head;
	let runner = head;

	while (runner && runner.next) {
		current = current.next;
		runner = runner.next.next;
	}

	return current;
};

// Runtime: 61 ms, faster than 86.17% of JavaScript online submissions for Middle of the Linked List.
// Memory Usage: 42.3 MB, less than 35.61% of JavaScript online submissions for Middle of the Linked List.