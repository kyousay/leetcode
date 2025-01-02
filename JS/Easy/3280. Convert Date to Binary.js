/**
 * @param {string} date
 * @return {string}
 */
var convertDateToBinary = function(date) {
    const deformat = date.split('-')
    let ans = []
    for(let date of deformat) {
        ans.push(Number(date).toString(2));
    }

    return ans.join('-');
};

// URL: https://leetcode.com/problems/convert-date-to-binary/
// Runtime: 2ms Beats 30.26%
// Memory: 50.32MB Beats 85.01%

// another answer
// mapで回せばよかったことに気づけなかった。また、+を使って暗黙的にキャストすればよかった。

/**
 * @param {string} date
 * @return {string}
 */
var convertDateToBinary = (date) => date.split('-').map(n => (+n).toString(2)).join('-');

// Runtime: 1ms Beats 81.27%
// Memory: 50.68MB Beats 55.91%