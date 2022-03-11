/**
 * @param {string} moves
 * @return {boolean}
 */
 var judgeCircle = function(moves) {
    const position = [0, 0];
    for(let move of moves) {
        if(move === "U") {
            position[0] += 1;
        } else if (move === "D") {
            position[0] -= 1;
        } else if(move === "L") {
            position[1] -= 1;
        } else if (move === "R") {
            position[1] += 1;
        }
    }
    return position[0] === 0 && position[1] === 0;
};

// Runtime: 84 ms, faster than 73.63% of JavaScript online submissions for Robot Return to Origin.
// Memory Usage: 41.1 MB, less than 57.18% of JavaScript online submissions for Robot Return to Origin.

// URL: https://leetcode.com/problems/robot-return-to-origin/