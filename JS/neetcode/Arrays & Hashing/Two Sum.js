class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        for(let i = 0; i < (nums.length - 1); i++) {
            for(let j = i + 1; j < nums.length; j++) {
                if((nums[i] + nums[j]) === target) return [i, j]
            }
        }
    }
}

// URL: https://neetcode.io/problems/two-integer-sum
// n2の計算量になっていていけてない。ブルートフォースパターン。

// another answer1
// 一度ループでインデックスを取得し、その後のループで差分を計算するという発想がなかった
class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const indices = [];

        for(let i = 0; i < nums.length; i++) {
            indices[nums[i]] = i;
        }

        for(let i = 0; i < nums.length; i++) {
            let diff = target - nums[i];
            if(indices[diff] !== undefined && indices[diff] !== i) {
                return [i, indices[diff]]
            }
        }

        return [];
    }
}

// another answer2
// 1をMapにした版
class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const prevMap = new Map();

        for(let i = 0; i < nums.length; i++) {
            const diff = target - nums[i];
            if(prevMap.has(diff)) {
                return [prevMap.get(diff), i]
            }

            prevMap.set(nums[i], i)
        }

        return []
    }
}