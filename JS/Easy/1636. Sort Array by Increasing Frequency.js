/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var frequencySort = function(nums) {
    const map = new Map();
    for(let num of nums) {
        map.set(num, map.get(num) ? map.get(num) + 1 : 1);
    }
    const arr = Array.from(map);
    arr.sort((x, y) => {
        if(x[1] === y[1]) {
          return y[0] - x[0];
        } else {
          return x[1] - y[1];   
        }
    });
    const retVal = [];
    for(let i = 0; i < arr.length; i++) {
        for(let j = 0; j < arr[i][1]; j++) {
            retVal.push(arr[i][0]);
        }
    }
    return retVal;
};

// Runtime: 76 ms, faster than 98.60% of JavaScript online submissions for Sort Array by Increasing Frequency.
// Memory Usage: 41.3 MB, less than 40.21% of JavaScript online submissions for Sort Array by Increasing Frequency.

// URL: https://leetcode.com/problems/sort-array-by-increasing-frequency/

// another answer
const frequencySort = nums => nums.sort((a,b) => nums.filter(x => x === a).length - nums.filter(x => x === b).length || b - a);