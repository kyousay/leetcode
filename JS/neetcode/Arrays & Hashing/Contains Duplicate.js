class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const obj = {};

        for(const num of nums) {
            if(obj[num] !== undefined) return true;
            obj[num] = num;
        }

        return false
    }
}

// URL: https://neetcode.io/problems/duplicate-integer

// another answer
// setで一括で重複を削除するという発想がなかった

class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        return new Set(nums).size < nums.length;
    }
}