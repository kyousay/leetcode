/**
 * @param {number[]} nums
 * @param {number} key
 * @param {number} k
 * @return {number[]}
 */
 var findKDistantIndices = function(nums, key, k) {
    const indexes = nums.reduce((acc, cur, index) => cur === key ? [...acc, index] : acc, []);
    const res = [];
    for(let i = 0; i < nums.length; i++) {
        for(let j = 0; j < indexes.length; j++) {
            if(Math.abs(i - indexes[j]) <= k) {
                res.push(i);
                break;
            }
        }
    }
    return res;
};

// URL: https://leetcode.com/problems/find-all-k-distant-indices-in-an-array/

// Runtime: 108 ms, faster than 72.40% of JavaScript online submissions for Find All K-Distant Indices in an Array.
// Memory Usage: 49.1 MB, less than 9.37% of JavaScript online submissions for Find All K-Distant Indices in an Array. 

// another answer
const findKDistantIndices = (a, key, k) => {
    let n = a.length, res = [], d = [];
    for (let i = 0; i < n; i++) {
       if (a[i] == key) d.push(i);
    }
    for (let i = 0; i < n; i++) {
        for (const j of d) {
            if (Math.abs(i - j) <= k) {
                res.push(i);
                break;
            }
        }
    }
    return res;
};

// Runtime: 74 ms, faster than 94.68% of JavaScript online submissions for Find All K-Distant Indices in an Array.
// Memory Usage: 44.7 MB, less than 41.01% of JavaScript online submissions for Find All K-Distant Indices in an Array.