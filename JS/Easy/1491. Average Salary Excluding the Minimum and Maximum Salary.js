/**
 * @param {number[]} salary
 * @return {number}
 */
 var average = function(salary) {
    salary.sort((x, y) => x - y);
    let sum = 0;
    for(let i = 0; i < salary.length; i++) {
        sum += i === 0 || i === salary.length - 1 ? 0 : salary[i];
    }
    return sum / (salary.length - 2);
};

// URL: https://leetcode.com/problems/average-salary-excluding-the-minimum-and-maximum-salary/

// Runtime: 72 ms, faster than 64.21% of JavaScript online submissions for Average Salary Excluding the Minimum and Maximum Salary.
// Memory Usage: 41.4 MB, less than 96.86% of JavaScript online submissions for Average Salary Excluding the Minimum and Maximum Salary.

// another answer1
// sliceで必要な値のみを取ってくるのがすごいと思った
const average = sal => sal.sort((x, y)=> x - y).slice(1, -1).reduce((sum, val)=> sum += val, 0) / (sal.length - 2)

// Runtime: 78 ms, faster than 53.17% of JavaScript online submissions for Average Salary Excluding the Minimum and Maximum Salary.
// Memory Usage: 42.3 MB, less than 18.07% of JavaScript online submissions for Average Salary Excluding the Minimum and Maximum Salary.

// another answer2
var average = function(salary) {
    return (salary.reduce((x,y) => x+y, 0)-Math.min(...salary)-Math.max(...salary))/(salary.length - 2)
};

// Runtime: 60 ms, faster than 91.77% of JavaScript online submissions for Average Salary Excluding the Minimum and Maximum Salary.
// Memory Usage: 41.8 MB, less than 70.44% of JavaScript online submissions for Average Salary Excluding the Minimum and Maximum Salary.
