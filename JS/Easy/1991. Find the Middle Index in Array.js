/**
 * @param {number[]} nums
 * @return {number}
 */
 var findMiddleIndex = function(nums) {
    if(nums.length === 1) return 0;
    let index = -1;
    let leftSum = 0;
    let rightSum = 0;
    for(let i = 0; i < nums.length; i++) {
        rightSum = 0;
        for(let j = i + 1; j < nums.length; j++) {
            rightSum += nums[j];
        }
        if(leftSum === rightSum) {
            index = i;
            break;
        }
        leftSum += nums[i];
    }  
    return index;
};

// URL: https://leetcode.com/problems/find-the-middle-index-in-array/

// Runtime: 103 ms, faster than 25.68% of JavaScript online submissions for Find the Middle Index in Array.
// Memory Usage: 42.3 MB, less than 65.57% of JavaScript online submissions for Find the Middle Index in Array.

// another answer
// rightSum側の計算を行わずに、Sumから引くことで半分かどうかを計算している
// 結果、rightSum側分の計算が不必要になり高速化される
var findMiddleIndex = function(nums) {
    let sum = nums.reduce((sum, a) => sum + a,0)
    for (let i = 0; i < nums.length; i++){if (nums.slice(0, i).reduce((sum, a) => sum + a,0) === (sum - nums[i])/2) {return i}}
    return -1
};

// Runtime: 74 ms, faster than 71.04% of JavaScript online submissions for Find the Middle Index in Array.
// Memory Usage: 43.9 MB, less than 22.40% of JavaScript online submissions for Find the Middle Index in Array.