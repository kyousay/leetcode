/**
 * @param {number} lowLimit
 * @param {number} highLimit
 * @return {number}
 */
 var countBalls = function(lowLimit, highLimit) {
    const hash = {}
    let i = lowLimit;
    while(i <= highLimit) {
        let count = 0;
        const nums = i.toString().split("");
        for(let num of nums) {
            count += Number(num);
        }
        if(hash[count]) {
            hash[count] += 1;
        } else {
            hash[count] = 1;
        }
        i++;
    }
    return Math.max(...Object.values(hash));
};

// Runtime: 198 ms, faster than 28.23% of JavaScript online submissions for Maximum Number of Balls in a Box.
// Memory Usage: 54.9 MB, less than 14.12% of JavaScript online submissions for Maximum Number of Balls in a Box.

// URL: https://leetcode.com/problems/maximum-number-of-balls-in-a-box/submissions/