/**
 * @param {number[]} target
 * @param {number[]} arr
 * @return {boolean}
 */
 var canBeEqual = function(target, arr) {
    target.sort((x, y) => x - y);
    arr.sort((x, y) => x - y);
    let answer = true;
    for(let i = 0; i < target.length; i++) {
        if(target[i] !== arr[i]) {
            answer = false;
            break;
        }
    }
    return answer;
};

// Runtime: 84 ms, faster than 63.68% of JavaScript online submissions for Make Two Arrays Equal by Reversing Sub-arrays.
// Memory Usage: 40.7 MB, less than 51.28% of JavaScript online submissions for Make Two Arrays Equal by Reversing Sub-arrays.

// URL: https://leetcode.com/problems/make-two-arrays-equal-by-reversing-sub-arrays/

// another answer
// const canBeEqual = (target, arr) => target.sort().join("") === arr.sort().join("");