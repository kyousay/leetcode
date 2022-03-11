/**
 * @param {number[]} arr
 * @return {boolean}
 */
 var uniqueOccurrences = function(arr) {
    let counter = {};
    for(let i = 0; i < arr.length; i++) {
        if(counter[arr[i]]) {
            counter[arr[i]] += 1;
        } else {
            counter[arr[i]] = 1;
        }
    }
    const values = Object.values(counter);
    const set = new Set(values);
    return set.size === values.length;
};

// Runtime: 72 ms, faster than 85.48% of JavaScript online submissions for Unique Number of Occurrences.
// Memory Usage: 40.6 MB, less than 16.60% of JavaScript online submissions for Unique Number of Occurrences.

// URL: https://leetcode.com/problems/unique-number-of-occurrences/

// another answer
// var uniqueOccurrences = function(arr) {
//     const map = new Map();
//     arr.forEach(num => map.set(num, map.has(num) ? map.get(num) + 1 : 1));
//     return map.size === new Set(map.values()).size;
// };