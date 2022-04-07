/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
 var findTheDifference = function(s, t) {
    let diff = '';
    for(let str of s) {
        const index = t.indexOf(str);
        if(index !== -1) {
            t = t.replace(str, '');
            continue;
        }
        diff += str;
    }
    return diff + t;
};

// URL: https://leetcode.com/problems/find-the-difference/

// Runtime: 64 ms, faster than 95.52% of JavaScript online submissions for Find the Difference.
// Memory Usage: 48.5 MB, less than 5.13% of JavaScript online submissions for Find the Difference.

// another answer
/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
 var findTheDifference = function(s, t) {
    let c = 0;
    for(let i=0; i<s.length; i++){
        c = c^ s.charCodeAt(i);
    }
    
    for(let i=0; i<t.length; i++){
        c = c^t.charCodeAt(i);
    }
    return String.fromCharCode(c);
};

// Runtime: 95 ms, faster than 53.63% of JavaScript online submissions for Find the Difference.
// Memory Usage: 42.5 MB, less than 94.05% of JavaScript online submissions for Find the Difference.