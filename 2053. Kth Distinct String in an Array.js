/**
 * @param {string[]} arr
 * @param {number} k
 * @return {string}
 */
 var kthDistinct = function(arr, k) {
    const map = new Map();
    for(let i = 0; i < arr.length; i++) {
        if(map.has(arr[i])) {
            map.set(arr[i], map.get(arr[i]) + 1);    
        } else {
            map.set(arr[i], 1);
        }
    }
    const array = Array.from(map).filter((m) => m[1] === 1);
    return array.length < k ? "" : array[k - 1][0]
};

/*
EXAMPLE
*/
// example1
// Input: arr = ["d","b","c","b","c","a"], k = 2
// Output: "a"
// Explanation:
// The only distinct strings in arr are "d" and "a".
// "d" appears 1st, so it is the 1st distinct string.
// "a" appears 2nd, so it is the 2nd distinct string.
// Since k == 2, "a" is returned. 

// example2
// Input: arr = ["aaa","aa","a"], k = 1
// Output: "aaa"
// Explanation:
// All strings in arr are distinct, so the 1st string "aaa" is returned.

// example3
// Input: arr = ["a","b","a"], k = 3
// Output: ""
// Explanation:
// The only distinct string is "b". Since there are fewer than 3 distinct strings, we return an empty string "".


/*
RESULT
*/
// Runtime: 84 ms, faster than 75.71% of JavaScript online submissions for Kth Distinct String in an Array.
// Memory Usage: 43.6 MB, less than 21.43% of JavaScript online submissions for Kth Distinct String in an Array.