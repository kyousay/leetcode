/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
 var relativeSortArray = function(arr1, arr2) {
    const sameArr = [];
    for(let val of arr2) {
        let isInclude = arr1.includes(val)
        while(isInclude) {
            sameArr.push(val);
            const index = arr1.findIndex((num) => num === val);
            arr1.splice(index, 1);
            isInclude = arr1.includes(val);
        }
    }
    return sameArr.concat(arr1.sort((x, y) => x - y));
};

// URL: https://leetcode.com/problems/relative-sort-array/

// Runtime: 71 ms, faster than 78.83% of JavaScript online submissions for Relative Sort Array.
// Memory Usage: 42.5 MB, less than 56.20% of JavaScript online submissions for Relative Sort Array.

// another answer
var relativeSortArray = function(arr1, arr2) {
    const filtered = []
    arr2.forEach((a) => filtered.push(...arr1.filter(num => num === a)))
    return [...filtered, ...arr1.filter(a => !arr2.includes(a)).sort((b,c) => b-c)]
}

// Runtime: 76 ms, faster than 68.98% of JavaScript online submissions for Relative Sort Array.
// Memory Usage: 43.4 MB, less than 32.12% of JavaScript online submissions for Relative Sort Array.
