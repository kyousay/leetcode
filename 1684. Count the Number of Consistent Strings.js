/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
 var countConsistentStrings = function(allowed, words) {
    let count = 0;
    for(let word of words) {
        for(let i = 0; i < word.length; i++) {
            if(allowed.indexOf(word[i]) === -1) break;
            if(i === word.length - 1) {
                count += 1;
            }
        }
    }
    return count;
};

// Runtime: 104 ms, faster than 90.89% of JavaScript online submissions for Count the Number of Consistent Strings.
// Memory Usage: 48.5 MB, less than 51.72% of JavaScript online submissions for Count the Number of Consistent Strings.

// URL: https://leetcode.com/problems/count-the-number-of-consistent-strings/

// another answer

/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
 var countConsistentStrings = function(allowed, words) {
    let regExp = new RegExp("^[" + allowed + "]*$");
    let count = 0;
    for(let word of words) {
        if(regExp.test(word)) {
            count++;
        }
    }
    return count;
};

// Runtime: 100 ms, faster than 96.80% of JavaScript online submissions for Count the Number of Consistent Strings.
// Memory Usage: 48.4 MB, less than 59.36% of JavaScript online submissions for Count the Number of Consistent Strings.