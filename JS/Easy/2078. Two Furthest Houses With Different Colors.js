/**
 * @param {number[]} colors
 * @return {number}
 */
 var maxDistance = function(colors) {
    let max = 0;
    const set = new Set();
    for(let i = 0; i < colors.length ; i++) {
        if(!set.has(colors[i])) {
            for(let j = colors.length -1; 0 <= j; j--) {
                if(colors[i] !== colors[j]) {
                    max = Math.max(max, Math.abs(i - j));
                    break;
                }
            }
            set.add(colors[i]);
        }
    }
    return max;
};

// Runtime: 76 ms, faster than 73.68% of JavaScript online submissions for Two Furthest Houses With Different Colors.
// Memory Usage: 38.4 MB, less than 95.14% of JavaScript online submissions for Two Furthest Houses With Different Colors.

// URL: https://leetcode.com/problems/two-furthest-houses-with-different-colors/