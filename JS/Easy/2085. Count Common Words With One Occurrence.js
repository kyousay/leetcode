/**
 * @param {string[]} words1
 * @param {string[]} words2
 * @return {number}
 */
 var countWords = function(words1, words2) {
    const hash1 = {};
    const hash2 = {};
    for(let i = 0; i < words1.length; i++) {
        if(hash1[words1[i]]) {
            hash1[words1[i]] += 1; 
        } else {
            hash1[words1[i]] = 1;
        }
    }
    for(let i = 0; i < words2.length; i++) {
        if(hash2[words2[i]]) {
            hash2[words2[i]] += 1;
        } else {
            hash2[words2[i]] = 1;
        }
    }
    
    return Object.entries(hash1).filter(([key, value]) => value === 1 && hash2[key] === 1).length;
};

// URL: https://leetcode.com/problems/count-common-words-with-one-occurrence/

// Runtime: 103 ms, faster than 61.25% of JavaScript online submissions for Count Common Words With One Occurrence.
// Memory Usage: 48.3 MB, less than 6.23% of JavaScript online submissions for Count Common Words With One Occurrence.

// another answer
// indexOf と lastIndexOf で一回しか登場しないことを判定する方法が思いつかなかった。
var countWords = function(words1, words2) {
    const arrayToIterate = words1.length > words2.length ? words2 : words1;
    let res = 0;

    for (let i = 0; i < arrayToIterate.length; i++) {
        const word = arrayToIterate[i];

        if (
            words1.indexOf(word) !== -1 &&
            words2.indexOf(word) !== -1 &&
            words1.indexOf(word) === words1.lastIndexOf(word) &&
            words2.indexOf(word) === words2.lastIndexOf(word)
        ) {
            res++;
        }
    }
    
    return res;
};

// Runtime: 92 ms, faster than 76.12% of JavaScript online submissions for Count Common Words With One Occurrence.
// Memory Usage: 44.9 MB, less than 78.89% of JavaScript online submissions for Count Common Words With One Occurrence.