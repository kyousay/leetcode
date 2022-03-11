/**
 * @param {number} num
 * @return {number}
 */
 var minimumSum = function(num) {
    const arr = num.toString().split('').sort((x, y) => x - y);
    console.log(num.toString().split('').sort((a,b) => a - b).slice(0,1));
    const splitA = arr[0] + arr[2];
    const splitB = arr[1] + arr[3];
    return Number(splitA) + Number(splitB);
};

// Runtime: 76 ms, faster than 62.63% of JavaScript online submissions for Minimum Sum of Four Digit Number After Splitting Digits.
// Memory Usage: 42.5 MB, less than 36.18% of JavaScript online submissions for Minimum Sum of Four Digit Number After Splitting Digits.

// URL: https://leetcode.com/problems/minimum-sum-of-four-digit-number-after-splitting-digits/submissions/

// another answer
// var minimumSum = function(num) {
// return parseInt(num.toString().split('').sort((a,b) => a - b).slice(0,1) + num.toString().split('').sort((a,b) => a - b).slice(2,3)) + parseInt(num.toString().split('').sort((a,b) => a - b).slice(1,2) + num.toString().split('').sort((a,b) => a - b).slice(3,4))
// };

// 疑問・発見
// 基本的な発想は同じだったが、sliceでコピーしてきた配列に対してparseIntをかけるのはなぜ機能するのか理解できなかった。
// ググっても答えは出ず。。。
// ただchromeのconsoleで試してみた感じ、配列の先頭にparseIntをかける & 先頭の値だけ配列から取り出して返してくれるっぽい。