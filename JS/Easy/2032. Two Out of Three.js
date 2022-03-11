/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @return {number[]}
 */
 var twoOutOfThree = function(nums1, nums2, nums3) {
    const set1 = Array.from(new Set(nums1));
    const set2 = Array.from(new Set(nums2));
    const set3 = Array.from(new Set(nums3));
    let hash = {};
    const max = Math.max(set1.length, set2.length, set3.length);
    let i = 0;
    while(i < max) {
        if(set1[i] && hash[set1[i]]){
            hash[set1[i]] += 1;
        } else {
            hash[set1[i]] = 1;
        };
        if(set2[i] && hash[set2[i]]) {
            hash[set2[i]] += 1;
        } else {
            hash[set2[i]] = 1; 
        }
        if(set3[i] && hash[set3[i]]) {
            hash[set3[i]] += 1   
        } else {
            hash[set3[i]] = 1;
        }
        i++;
    }
    return Object.entries(hash).filter(num => num[1] > 1).map(val => val[0]);
};

// Runtime: 100 ms, faster than 57.36% of JavaScript online submissions for Two Out of Three.
// Memory Usage: 43.5 MB, less than 23.96% of JavaScript online submissions for Two Out of Three.

// URL: https://leetcode.com/problems/two-out-of-three/

// another answer
var twoOutOfThree = function(nums1, nums2, nums3) {
    const map = new Map();

    let arrayIndex = 0;
    for(const array of [nums1, nums2, nums3]) {
        arrayIndex++;
        for(const value of array) {
            map.set((map.get(value) || new Set()).add(arrayIndex));
        }
    }

    let result = [];
    for(const [key, value] of map) {
        if(value.size > 1) {
          result = [...result, key];
        }
    }
    return result;
}