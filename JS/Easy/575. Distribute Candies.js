/**
 * @param {number[]} candyType
 * @return {number}
 */
 var distributeCandies = function(candyType) {
    const set = new Set(candyType);
    return set.size >= candyType.length / 2 ? candyType.length / 2 : set.size;
};

// URL: https://leetcode.com/problems/distribute-candies/

// Runtime: 178 ms, faster than 52.65% of JavaScript online submissions for Distribute Candies.
// Memory Usage: 56.4 MB, less than 44.55% of JavaScript online submissions for Distribute Candies.


// another answer
/**
 * @param {number[]} candyType
 * @return {number}
 */
 var distributeCandies = (candyType) => new Set(candyType).size >= candyType.length / 2 ? candyType.length / 2 : new Set(candyType).size;

// Runtime: 108 ms, faster than 98.13% of JavaScript online submissions for Distribute Candies.
// Memory Usage: 56.6 MB, less than 31.15% of JavaScript online submissions for Distribute Candies.