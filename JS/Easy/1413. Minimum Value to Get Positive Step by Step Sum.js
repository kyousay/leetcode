/**
 * @param {number[]} nums
 * @return {number}
 */
 var minStartValue = function(nums) {
    let startNum = 1, count = 1;
    while(true) {
        for(let i = 0; i < nums.length; i++) {
            count += nums[i];
            if(count < 1) break;
            if(i === nums.length -1) return startNum;
        }
        startNum++;
        count = startNum;
    }
};

// URL: https://leetcode.com/problems/minimum-value-to-get-positive-step-by-step-sum/submissions/

// Runtime: 95 ms, faster than 32.70% of JavaScript online submissions for Minimum Value to Get Positive Step by Step Sum.
// Memory Usage: 42.2 MB, less than 33.33% of JavaScript online submissions for Minimum Value to Get Positive Step by Step Sum.

// another answer1
// numsの中で一番低くなる瞬間の値を取ってこれれば、そこに１足した値にすれば、O(n)にできる
/**
 * @param {number[]} nums
 * @return {number}
 */
 var minStartValue = function(nums) {
    let minSum = +Infinity;
    nums.reduce((a, i) => {
        let res = a + i;
        minSum = Math.min(minSum, res)
        return res;
    }, 0);
    console.log(minSum);
    let result = 1 - minSum;
    return result > 0 ? result : 1;
};

// Runtime: 87 ms, faster than 51.83% of JavaScript online submissions for Minimum Value to Get Positive Step by Step Sum.
// Memory Usage: 42.2 MB, less than 32.93% of JavaScript online submissions for Minimum Value to Get Positive Step by Step Sum.

// another answer2
// こちらはmaxの値を
var minStartValue = function(nums) {
    let num = Math.min(...nums)
    if(num > 0){
        return 1
    }
    
    let max = 1
    let result = max
    for(let i = 0; i < nums.length; i++){   
        max += nums[i] 
        if(max <= 0){ 
            // if max = -5, Add (-1 * 5) + 1 to result
            result = result + (-1 *max) + 1
            max =  1 
        }
    }
    return result
};
// Runtime: 76 ms, faster than 68.90% of JavaScript online submissions for Minimum Value to Get Positive Step by Step Sum.
// Memory Usage: 42 MB, less than 42.68% of JavaScript online submissions for Minimum Value to Get Positive Step by Step Sum.