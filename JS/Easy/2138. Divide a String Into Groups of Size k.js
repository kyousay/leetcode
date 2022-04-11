/**
 * @param {string} s
 * @param {number} k
 * @param {character} fill
 * @return {string[]}
 */
 var divideString = function(s, k, fill) {
    let arr = [];
    let sum = '';
    for(let i = 0; i < s.length; i++) {
        if(sum.length !== 0 && sum.length % k === 0) {
            arr.push(sum);
            sum = '';
        }
        sum += s[i];
        if(i === s.length - 1) {
            if(sum.length % k !== 0) {
            for(let j = sum.length % k; j < k; j++) {
                sum += fill;
            }   
            }
            arr.push(sum);
        }
    }
    return arr;
};

// URL: https://leetcode.com/problems/divide-a-string-into-groups-of-size-k/

// Runtime: 84 ms, faster than 45.86% of JavaScript online submissions for Divide a String Into Groups of Size k.
// Memory Usage: 42.9 MB, less than 35.91% of JavaScript online submissions for Divide a String Into Groups of Size k.

// another answer
var divideString = function(s, k, fill) {
    let length = s.length;
    let count = Math.floor(length/k);
    let result = [];
    let last = s.slice(length - length%k, length)
    let lastlen = last.length
    for (let i = 0; i < count; i++){
        result.push(s.slice(i*k, i*k+k))
    }
    if (lastlen == 0){
        return result
    } else {
        while (lastlen !== k){
            last += fill
            lastlen = last.length
        }
        result.push(last)
        return result
    }
};

// Runtime: 76 ms, faster than 59.12% of JavaScript online submissions for Divide a String Into Groups of Size k.
// Memory Usage: 42.5 MB, less than 59.12% of JavaScript online submissions for Divide a String Into Groups of Size k.