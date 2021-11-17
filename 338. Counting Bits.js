/**
 * @param {number} n
 * @return {number[]}
 */
 var countBits = function(n) {
    let answer = [0];
    for(let i = 1; i < n + 1; i++) {
        let count = 0;
        const bit = i.toString(2);
        for(let j = 0; j < bit.length; j++) {
            if(bit[j] === '1') {
                count += 1;
            }
        }
        answer.push(count);
    }
    return answer;
};

// Runtime: 120 ms, faster than 46.73% of JavaScript online submissions for Counting Bits.
// Memory Usage: 46.4 MB, less than 30.01% of JavaScript online submissions for Counting Bits.

// URL: https://leetcode.com/problems/counting-bits/
