/**
 * @param {string} text
 * @param {string} first
 * @param {string} second
 * @return {string[]}
 */
 var findOcurrences = function(text, first, second) {
    text = text.split(' ');
    let res = [];
    let i = 0;
    while(i < text.length) {
        if(text[i] === first) {
            if(text[i + 1] === second) {
                text[i + 2] && res.push(text[i + 2]);
            }
        }
        i+=1;
    }
    return res;
};

// URL: https://leetcode.com/problems/occurrences-after-bigram/

// Runtime: 69 ms, faster than 62.71% of JavaScript online submissions for Occurrences After Bigram.
// Memory Usage: 42.1 MB, less than 51.69% of JavaScript online submissions for Occurrences After Bigram.

// another answer
/**
 * @param {string} text
 * @param {string} first
 * @param {string} second
 * @return {string[]}
 */
 var findOcurrences = function(text, first, second) {
    text = text.split(" ");
    
    const result = [];
    
    for (let i = 2; i < text.length; i++) {
        if (text[i - 2] === first && text[i - 1] === second) result.push(text[i])
    }
    
    return result;
};

// Runtime: 59 ms, faster than 86.44% of JavaScript online submissions for Occurrences After Bigram.
// Memory Usage: 42.1 MB, less than 51.69% of JavaScript online submissions for Occurrences After Bigram.
