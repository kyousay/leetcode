/**
 * @param {string} s
 * @return {string}
 */
 var removeDuplicates = function(s) {
    const res = s.split('')
    let i = 0;
    while(i < res.length) {
        if(res[i] === res[i + 1]) {
            res.splice(i, 2);
            i = Math.max(i - 1, 0);
            continue;
        }
        i += 1;
    }
    return res.join('');
};

// Runtime: 512 ms, faster than 14.59% of JavaScript online submissions for Remove All Adjacent Duplicates In String.
// Memory Usage: 48 MB, less than 55.27% of JavaScript online submissions for Remove All Adjacent Duplicates In String.

// URL: https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string/

// another answer
var removeDuplicates = function(s) {
    if(s.length <= 1) {
        return s;
    }
    let ans = [s[0]];
    for(let i = 0; i < s.length; i++) {
        if(s[i] === ans[ans.length - 1]) {
            ans.pop();
        } else {
            ans.push(s[i])
        }
    }
    return ans.join('');
}

// Runtime: 80 ms, faster than 97.55% of JavaScript online submissions for Remove All Adjacent Duplicates In String.
// Memory Usage: 48.1 MB, less than 55.27% of JavaScript online submissions for Remove All Adjacent Duplicates In String.

