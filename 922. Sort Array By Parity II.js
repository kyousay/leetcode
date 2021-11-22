/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var sortArrayByParityII = function(nums) {
    const odd = [];
    const even = [];
    const final = [];
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] % 2 === 0) {
            even.push(nums[i])
        } else {
            odd.push(nums[i])
        }
    }
    for(let j = 0; j < odd.length; j++) {
        final.push(even[j]);
        final.push(odd[j]);
    }
    return final;
};

// Runtime: 147 ms, faster than 10.89% of JavaScript online submissions for Sort Array By Parity II.
// Memory Usage: 45.8 MB, less than 35.23% of JavaScript online submissions for Sort Array By Parity II.

// URL: https://leetcode.com/problems/sort-array-by-parity-ii/

// another answer
