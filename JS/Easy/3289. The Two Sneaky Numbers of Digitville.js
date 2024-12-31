/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getSneakyNumbers = function(nums) {
    const set = new Set();
    for(let i = 0; i < nums.length; i++) {
        if(set.has(nums[i])) {
            continue;
        }
        set.add(nums.splice(i, 1)[0]);
        i--
    }

    return nums;
};

// URL: https://leetcode.com/problems/the-two-sneaky-numbers-of-digitville/
// Runtime: 2ms Beats 65.01%
// Memory: 51.31MB Beats 57.06%

// another answer
// 使っている変数を一つ少なくできていたが、spliceを使っているので、計算量が増えている？感じになってしまっていた

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getSneakyNumbers = function (nums) {
    const numsMap = new Set();

    return nums.reduce((result, num) => {
        if (numsMap.has(num)) {
            result.push(num);
        } else {
            numsMap.add(num)
        }

        return result;
    }, [])
};

// Runtime: 1ms Beats 92.94%
// Memory: 51.30MB Beats 63.36%

