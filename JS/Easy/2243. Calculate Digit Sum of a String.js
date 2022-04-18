/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
 var digitSum = function(s, k) {
    if(s.length <= k) return s;
    let str = [];
    for(let i = 0; i < Math.ceil(s.length / k); i++) {
        const end = (i * k + k) > s.length ? s.length: i * k + k;
        str.push(s.slice(i * k, end));
    }
    let sum = '';
    for(let st of str) {
        let n = 0;
        for(let num of st) {
           n += Number(num) ;
        }
        sum += n;
    }
    return digitSum(sum, k);
};

// URL: https://leetcode.com/problems/calculate-digit-sum-of-a-string/

// Runtime: 65 ms, faster than 100.00% of JavaScript online submissions for Calculate Digit Sum of a String.
// Memory Usage: 43.2 MB, less than 100.00% of JavaScript online submissions for Calculate Digit Sum of a String.

// another answer
const digitSum = (s, k) => {
    while (s.length > k) {
        let t = ''; // each round accumalate new string t
        for (let i = 0; i < s.length; i += k) {
            let sub = s.slice(i, i + k), sum = 0;
            for (const c of sub) sum += c - '0'; // sum of each digits
            t += sum; // rebuild new string with sum
        }
        s = t; // update new string to s
    }
    return s;
};

// Runtime: 58 ms, faster than 100.00% of JavaScript online submissions for Calculate Digit Sum of a String.
// Memory Usage: 42.7 MB, less than 100.00% of JavaScript online submissions for Calculate Digit Sum of a String.

