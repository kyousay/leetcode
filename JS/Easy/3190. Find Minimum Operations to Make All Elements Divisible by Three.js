/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = nums => nums.reduce((acc, cur) => cur % 3 === 0 ? acc : acc + 1, 0);

// URL: https://leetcode.com/problems/find-minimum-operations-to-make-all-elements-divisible-by-three/
// Runtime: 0ms Beats 100.00%
// Memory: 50.49MB Beats 94.78%

// another answer
// b % 3 !== 0 は、booleanになり、true=1, false=0として計算される

/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function(nums) {
    return nums.reduce((a, b) => a + (b % 3 !== 0), 0);
};

// Runtime: 0ms Beats 100.00%
// Memory: 51.69MB Beats 11.48%

