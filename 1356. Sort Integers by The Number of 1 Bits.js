/**
 * @param {number[]} arr
 * @return {number[]}
 */
 var sortByBits = function(arr) {
    const hash = {};
    for(let num of arr) {
        const bit = num.toString(2);
        if(hash[num]) hash[num] = 0;
        for(let b of bit) {
            if(!hash[num]) {
                hash[num] = 0;
            }
            b === '1' && hash[num]++;
        }
    }
    return arr.sort((x, y) => {
        if(hash[x] === hash[y]) {
            return x - y;
        }
        return hash[x] - hash[y];
    })
};

// Runtime: 187 ms, faster than 29.56% of JavaScript online submissions for Sort Integers by The Number of 1 Bits.
// Memory Usage: 43.4 MB, less than 50.43% of JavaScript online submissions for Sort Integers by The Number of 1 Bits.

// URL: https://leetcode.com/problems/sort-integers-by-the-number-of-1-bits/

// another answer1
var sortByBits = function(arr) {
    return arr.sort((a,b) => a.toString(2).replace(/0/g,"").length - b.toString(2).replace(/0/g,"").length || a - b);
  };
//   Runtime: 289 ms, faster than 19.13% of JavaScript online submissions for Sort Integers by The Number of 1 Bits.
//   Memory Usage: 44.5 MB, less than 39.13% of JavaScript online submissions for Sort Integers by The Number of 1 Bits.
  
// another answer2
var sortByBits = function(arr) {
    const cache = new Map()
  
    const getBitCount = num => {
      if (cache.has(num)) {
        return cache.get(num)
      }
  
      let count = 0
      let bits = num
  
      while (bits) {
        bits &= bits - 1
        count++
      }
  
      cache.set(num, count)
  
      return count
    }
  
    return arr.sort((a, b) => {
      const bitsA = getBitCount(a)
      const bitsB = getBitCount(b)
  
      if (bitsA === bitsB) {
        return a - b
      }
  
      return bitsA - bitsB
    })
  };
//   Runtime: 96 ms, faster than 79.13% of JavaScript online submissions for Sort Integers by The Number of 1 Bits.
//   Memory Usage: 41.3 MB, less than 65.22% of JavaScript online submissions for Sort Integers by The Number of 1 Bits.

