/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
 var hammingDistance = function(x, y) {
    const target = (x ^ y).toString(2);
    let count = 0;
    for(let num of target) {
        if(num === '1') count++;
    }
    return count;
};

// Runtime: 64 ms, faster than 97.13% of JavaScript online submissions for Hamming Distance.
// Memory Usage: 40.2 MB, less than 5.10% of JavaScript online submissions for Hamming Distance.

// URL: https://leetcode.com/problems/hamming-distance/