/**
 * @param {string} s
 * @return {boolean}
 */
 var areNumbersAscending = function(s) {
    const nums = []
    const str = s.split(" ");
    let judge = false;
    for(let i = 0; i < str.length; i++) {
        const num = Number(str[i]);
        if(!num) continue;
        nums.push(num);
    }
    for(let i = nums.length - 1; 0 <= i; i--) {
        if(nums[i] <= nums[i - 1]) {
            return false;
        }
    }
    return true;
};

// URL: https://leetcode.com/problems/check-if-numbers-are-ascending-in-a-sentence/

// Runtime: 96 ms, faster than 40.40% of JavaScript online submissions for Check if Numbers Are Ascending in a Sentence.
// Memory Usage: 42 MB, less than 60.80% of JavaScript online submissions for Check if Numbers Are Ascending in a Sentence.

// another answer
// 配列ではなく、前の値を保持していればそれとの比較で途中でreturnできる。
// NaNを判定するのは同じだったが、前の値を用意していれば同時に計算できるのは気づかなかった。
/**
 * @param {string} s
 * @return {boolean}
 */
 var areNumbersAscending = function(s) {
    let items = s.split(' ');
    let prev = Number.MIN_VALUE;
    for(let str of items) {
        let val = parseInt(str);
        if(!val) continue;
        if(prev >= val) return false;
        prev = val;
    }
    return true;
};

// Runtime: 56 ms, faster than 96.80% of JavaScript online submissions for Check if Numbers Are Ascending in a Sentence.
// Memory Usage: 42.5 MB, less than 26.00% of JavaScript online submissions for Check if Numbers Are Ascending in a Sentence.