/**
 * @param {string[]} words
 * @return {string[]}
 */
 var stringMatching = function(words) {
    words.sort((x, y) => x.length - y.length);
    let res = [];
    for(let i = 0; i < words.length; i++) {
        for(let j = i + 1; j < words.length; j++) {
            if(words[j].includes(words[i])) {
                res.push(words[i]);
                break;
            }
        }
    }
    return res;
};

// URL: https://leetcode.com/problems/string-matching-in-an-array/

// Runtime: 88 ms, faster than 55.71% of JavaScript online submissions for String Matching in an Array.
// Memory Usage: 43 MB, less than 20.13% of JavaScript online submissions for String Matching in an Array.

// another answer
/**
 * @param {string[]} words
 * @return {string[]}
 */
 var stringMatching = function(words) {
    let res = [];
    for (let word of words){
        if (words.filter(w => w.includes(word)).length > 1) res.push(word);
    }
    return res;
};

// Runtime: 89 ms, faster than 53.02% of JavaScript online submissions for String Matching in an Array.
// Memory Usage: 44.1 MB, less than 11.41% of JavaScript online submissions for String Matching in an Array.