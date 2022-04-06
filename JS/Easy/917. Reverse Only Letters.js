/**
 * @param {string} s
 * @return {string}
 */
 var reverseOnlyLetters = function(s) {
    const str = s.split('')
    const regExp = /[a-zA-Z]/;
    let counter = 0;
    for(let i = 0; i < str.length; i++) {
        if(i + counter >= str.length) break;
        if(regExp.test(str[i])) {
            for(let j = str.length - 1 - counter; i < j; j--) {
                if(regExp.test(str[j])) break;
                counter++;
            }
            [str[i], str[str.length - 1 - counter]] = [str[str.length - 1 - counter], str[i]];
            counter++;
        }
    }
    return str.join('');
};

// URL: https://leetcode.com/problems/reverse-only-letters/

// Runtime: 60 ms, faster than 94.52% of JavaScript online submissions for Reverse Only Letters.
// Memory Usage: 42.6 MB, less than 46.41% of JavaScript online submissions for Reverse Only Letters.

// another answer
var reverseOnlyLetters = function(s) {
    const chars = [];
    return s.split("")
        .map(val => {
            const code = val.charCodeAt(0);
            if (code < 65 || code > 90 && code < 97 || code > 122) return val
            chars.push(val);
            return null;
        })
        .map(val => val === null ? chars.pop() : val)
        .join("")
};

// Runtime: 64 ms, faster than 88.19% of JavaScript online submissions for Reverse Only Letters.
// Memory Usage: 42.1 MB, less than 86.08% of JavaScript online submissions for Reverse Only Letters.