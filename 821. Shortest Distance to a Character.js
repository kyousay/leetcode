/**
 * @param {string} s
 * @param {character} c
 * @return {number[]}
 */
 var shortestToChar = function(s, c) {
    const arr = s.split('');
    const target = arr.reduce((acc, cur, index) => cur === c ? [...acc, index]: acc, []);
    return arr.map((s, index) => {
        let min = Infinity;
        for(let base of target) {
            min = Math.min(min, Math.abs(base - index));
        }
        return min;
    })
};

// Runtime: 80 ms, faster than 88.52% of JavaScript online submissions for Shortest Distance to a Character.
// Memory Usage: 41.1 MB, less than 45.45% of JavaScript online submissions for Shortest Distance to a Character.

// URL: https://leetcode.com/problems/shortest-distance-to-a-character/