/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
 var nextGreaterElement = function(nums1, nums2) {
    for(let i = 0; i < nums1.length; i++) {
        const index = nums2.indexOf(nums1[i]);
        let val = -1;
        for(let j = index + 1; j < nums2.length; j++) {
            if(nums1[i] < nums2[j]) {
                val = nums2[j];
                break;
            }
        }
        nums1[i] = val;
    }
    return nums1;
};

// Runtime: 76 ms, faster than 91.42% of JavaScript online submissions for Next Greater Element I.
// Memory Usage: 40.2 MB, less than 69.06% of JavaScript online submissions for Next Greater Element I.

// URL: https://leetcode.com/problems/next-greater-element-i/

// another answer
const nextGreaterElement = (nums1, nums2) => nums1.map(x => nums2.slice(nums2.indexOf(x)).find(v => v > x) || -1);

/* 
学んだこと
- sliceに-1が来たときは、最後の要素が取られる 
  - ex: "hogehoge".slice(-1) === "e"
  - ex: "hogehoge".slice(-1, -3) === ""
  - ex: "hogehoge".slice(-3, -1) === "og"
- indexOfは配列にも使える(stringのbuildinかと思っていた)
- findの返値は 要素(単体) || undefined
*/

