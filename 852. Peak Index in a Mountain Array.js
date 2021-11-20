/**
 * @param {number[]} arr
 * @return {number}
 */
 var peakIndexInMountainArray = function(arr) {
    for(let i = 1; i < arr.length; i++) {
        if(arr[i - 1] < arr[i] && arr[i + 1] < arr[i]) {
            return i;
        }
    }
};

// Runtime: 76 ms, faster than 56.82% of JavaScript online submissions for Peak Index in a Mountain Array.
// Memory Usage: 40.7 MB, less than 19.08% of JavaScript online submissions for Peak Index in a Mountain Array.

// URL: https://leetcode.com/problems/peak-index-in-a-mountain-array/

