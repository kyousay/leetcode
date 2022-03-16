/**
 * @param {string} s
 * @return {boolean}
 */
 var checkString = (s) => {
    const indexes = [];
    for(let i = 0; i < s.length; i++) {
        if(s[i] === 'a') {
            indexes.push(i);
        }
    }
    return (indexes[0] === 0 && indexes.every((i, index) => i === index)) || indexes.length === 0;
}

// URL: https://leetcode.com/problems/check-if-all-as-appears-before-all-bs/

// Runtime: 73 ms, faster than 73.52% of JavaScript online submissions for Check if All A's Appears Before All B's.
// Memory Usage: 42.2 MB, less than 33.33% of JavaScript online submissions for Check if All A's Appears Before All B's.



// another answer1
// indexOfを使ってbaが来るパターンを判定すればいけることに気づかなかった。(-1はないことを判定している)
const checkString = s => s.indexOf("ba") === -1;
const checkString = s => s.includes("ba");

// Runtime: 75 ms, faster than 71.96% of JavaScript online submissions for Check if All A's Appears Before All B's.
// Memory Usage: 42.1 MB, less than 46.11% of JavaScript online submissions for Check if All A's Appears Before All B's.



// another answer2
// 問題の肝は、"ba"をチェックすれば良いことに気づけるかどうか
var checkString = function(s) {
    for (let i = 0; i < s.length; i++) {
        if(s[i] === "b" && s[i+1] === "a"){
            return false;
        }
    }
    return true;
};