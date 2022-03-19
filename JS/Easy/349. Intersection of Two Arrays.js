/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
 var intersection = function(nums1, nums2) {
    const set1 = new Set(nums1);
    const set2 = new Set(nums2);
    return [...set1].filter(x => set2.has(x));
};

// URL: https://leetcode.com/problems/intersection-of-two-arrays/submissions/

// Runtime: 68 ms, faster than 85.23% of JavaScript online submissions for Intersection of Two Arrays.
// Memory Usage: 43.8 MB, less than 40.17% of JavaScript online submissions for Intersection of Two Arrays.

// another answer1
var intersection = function(nums1, nums2) {
    const set = new Set(nums1);
    return Array.from(
        new Set(nums2.filter(x => set.has(x)))
    );
};

// Runtime: 76 ms, faster than 72.17% of JavaScript online submissions for Intersection of Two Arrays.
// Memory Usage: 43.3 MB, less than 53.56% of JavaScript online submissions for Intersection of Two Arrays.

// another answer2
var intersection = function (nums1, nums2) {
    const set1 = new Set(nums1);
    const set2 = new Set(nums2);
    let result = [];
    let maxSet, minSet;
    if (set1.size > set2.size) {
      maxSet = set1;
      minSet = set2;
    } else {
      maxSet = set2;
      minSet = set1;
    }
  
    for (let value of maxSet) {
      if (minSet.has(value)) {
        result.push(value);
      }
    }
    return result;
  };

// Runtime: 61 ms, faster than 92.54% of JavaScript online submissions for Intersection of Two Arrays.
// Memory Usage: 44.1 MB, less than 26.31% of JavaScript online submissions for Intersection of Two Arrays.