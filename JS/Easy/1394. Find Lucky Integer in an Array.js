/**
 * @param {number[]} arr
 * @return {number}
 */
 var findLucky = function(arr) {
    const hash = {};
    for(let i = 0; i < arr.length; i++) {
        hash[arr[i]] ? hash[arr[i]]++ : hash[arr[i]] = 1;
    }
    return Object.entries(hash).filter(([key, val]) => key == val).sort((x, y) => y[1] - x[1])?.[0]?.[1] || -1;
};

// URL: https://leetcode.com/problems/find-lucky-integer-in-an-array/

// Runtime: 53 ms, faster than 99.36% of JavaScript online submissions for Find Lucky Integer in an Array.
// Memory Usage: 44.9 MB, less than 20.13% of JavaScript online submissions for Find Lucky Integer in an Array.

// another answer1
/**
 * @param {number[]} arr
 * @return {number}
 */
 var findLucky = function(arr) {
    const luckyNumCounter = {};
  
    for (let item of arr) {
      luckyNumCounter[item] = luckyNumCounter[item] + 1 || 1;
    }
  
    let largestLucy = -1;
  
    for (let key in luckyNumCounter) {
      const value = luckyNumCounter[key];
      const isLuckyNumber = value == key;
  
      if (isLuckyNumber) {
        largestLucy = Math.max(isLuckyNumber, value);
      }
    }
  
    return largestLucy;
  };

//   Runtime: 76 ms, faster than 72.52% of JavaScript online submissions for Find Lucky Integer in an Array.
//   Memory Usage: 44.2 MB, less than 44.73% of JavaScript online submissions for Find Lucky Integer in an Array.

