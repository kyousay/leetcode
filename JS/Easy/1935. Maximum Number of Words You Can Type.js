/**
 * @param {string} text
 * @param {string} brokenLetters
 * @return {number}
 */
 var canBeTypedWords = function(text, brokenLetters) {
    let count = 0;
    const sentence = text.split(' ');
    for(let s of sentence) {
        s.split("").every(t => !brokenLetters.includes(t)) && count++;
    }
    return count;
};


// Runtime: 76 ms, faster than 71.76% of JavaScript online submissions for Maximum Number of Words You Can Type.
// Memory Usage: 40.5 MB, less than 38.93% of JavaScript online submissions for Maximum Number of Words You Can Type.

// URL: https://leetcode.com/problems/maximum-number-of-words-you-can-type/

// another answer
// /**
//  * @param {string} text
//  * @param {string} brokenLetters
//  * @return {number}
//  */
//  var canBeTypedWords = function(text, brokenLetters) {
//     const lettersArr = brokenLetters.split('') 
//     const checker = word => !lettersArr.some(letter => word.includes(letter)); 
//     return text.split(' ').filter(checker).length
// };