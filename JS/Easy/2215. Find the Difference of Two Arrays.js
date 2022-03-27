/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
 var findDifference = function(nums1, nums2) {
    const commonNums = new Set();
    for(let num of nums1) {
        if(nums2.includes(num)) commonNums.add(num);
    }
    return [
        Array.from(nums1.reduce((acc, num) => commonNums.has(num) ? acc : acc.add(num), new Set())), 
        Array.from(nums2.reduce((acc, num) => commonNums.has(num) ? acc : acc.add(num), new Set()))
    ];
};

// URL: https://leetcode.com/problems/find-the-difference-of-two-arrays/

// Runtime: 175 ms, faster than 100.00% of JavaScript online submissions for Find the Difference of Two Arrays.
// Memory Usage: 48 MB, less than 100.00% of JavaScript online submissions for Find the Difference of Two Arrays.

// another answer1
const findDifference = (a, b) => {
    let res1 = [], res2 = [], sa = new Set(a), sb = new Set(b);
    for (const x of sa) {
        if (!sb.has(x)) res1.push(x);
    }
    for (const x of sb) {
        if (!sa.has(x)) res2.push(x);
    }
    return [res1, res2];
};

// Runtime: 120 ms, faster than 100.00% of JavaScript online submissions for Find the Difference of Two Arrays.
// Memory Usage: 49.5 MB, less than 100.00% of JavaScript online submissions for Find the Difference of Two Arrays.

// another answer2
