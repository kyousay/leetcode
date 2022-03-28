/**
 * @param {number[]} nums
 * @return {number}
 */
 var arraySign = function(nums) {
    let minus = 0;
    for(let num of nums) {
        if(num === 0) return 0;
        if(num < 0) minus += 1;
    }
    return minus % 2 ? -1 : 1;
};

// URL: https://leetcode.com/problems/sign-of-the-product-of-an-array/

// Runtime: 64 ms, faster than 86.22% of JavaScript online submissions for Sign of the Product of an Array.
// Memory Usage: 44.1 MB, less than 25.64% of JavaScript online submissions for Sign of the Product of an Array.