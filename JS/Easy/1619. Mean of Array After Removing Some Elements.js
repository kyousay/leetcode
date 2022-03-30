/**
 * @param {number[]} arr
 * @return {number}
 */
 var trimMean = function(arr) {
    arr.sort((x,y) => x - y);
    const percent = arr.length * 0.05;
    return arr.slice(percent, -percent).reduce((acc, cur) => acc += cur, 0) / (arr.length - percent * 2);
};

// URL: https://leetcode.com/problems/mean-of-array-after-removing-some-elements/

// Runtime: 106 ms, faster than 23.42% of JavaScript online submissions for Mean of Array After Removing Some Elements.
// Memory Usage: 44.2 MB, less than 24.32% of JavaScript online submissions for Mean of Array After Removing Some Elements.

// another answer
var trimMean = function(arr) {
    var length = arr.length / 20;
    var sum = 0;
    arr.sort((a,b) =>a-b)
    for(let i=length; i<arr.length-length; i++){
        sum+=arr[i]
    }
    return sum / (arr.length - 2*length)
};

// Runtime: 64 ms, faster than 95.50% of JavaScript online submissions for Mean of Array After Removing Some Elements.
// Memory Usage: 42.4 MB, less than 94.59% of JavaScript online submissions for Mean of Array After Removing Some Elements.