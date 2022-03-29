/**
 * @param {string} s1
 * @param {string} s2
 * @return {string[]}
 */
 var uncommonFromSentences = function(s1, s2) {
    const map = new Map();
    const a1 = s1.split(' ');
    const a2 = s2.split(' ');
    let i = 0;
    while(true) {
        a1[i] && map.set(a1[i], map.get(a1[i]) + 1 || 1);
        a2[i] && map.set(a2[i], map.get(a2[i]) + 1 || 1);
        if(!a1[i] && !a2[i]) break;
        i++
        
    }
    return Array.from(map).filter((val) => val[1] <= 1).map((val) => val[0]);
};

// URL: https://leetcode.com/problems/uncommon-words-from-two-sentences/

// Runtime: 70 ms, faster than 74.92% of JavaScript online submissions for Uncommon Words from Two Sentences.
// Memory Usage: 42.1 MB, less than 85.99% of JavaScript online submissions for Uncommon Words from Two Sentences.

// another answer1
var uncommonFromSentences = (s1, s2) => Object.entries((s1 + " " + s2)
    .split(" ")
    .reduce((hash, curr, idx) => {
        if (!(curr in hash)) hash[curr] = 1;
        else hash[curr]++;
        return hash
    }, {}))
    .filter(entry => entry[1] < 2)
    .map(val => val[0]);

// Runtime: 78 ms, faster than 60.91% of JavaScript online submissions for Uncommon Words from Two Sentences.
// Memory Usage: 42.6 MB, less than 46.58% of JavaScript online submissions for Uncommon Words from Two Sentences.


// another answer2