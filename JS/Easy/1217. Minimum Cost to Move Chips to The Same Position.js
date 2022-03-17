/**
 * @param {number[]} position
 * @return {number}
 */
 var minCostToMoveChips = function(position) {
    const arr = [0, 0];
    position.forEach(val => {
        if(val % 2 === 0) {
            arr[0] += 1;
        } else {
            arr[1] += 1;
        }
    });
    return Math.min(...arr);
};

// URL: https://leetcode.com/problems/minimum-cost-to-move-chips-to-the-same-position/

// Runtime: 73 ms, faster than 68.47% of JavaScript online submissions for Minimum Cost to Move Chips to The Same Position.
// Memory Usage: 41.7 MB, less than 65.77% of JavaScript online submissions for Minimum Cost to Move Chips to The Same Position.
