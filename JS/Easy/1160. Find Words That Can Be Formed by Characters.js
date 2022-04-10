var countCharacters = function(words, chars) {    
    let sum = 0;
    for(let i = 0; i < words.length; i++) {
        let char = chars;
        for(let j = 0; j < words[i].length; j++) {
            const c = words[i][j];
            const index = char.indexOf(c);
            if(index === -1) {
                break;
            }
            char = char.replace(c, '');
            if(j === words[i].length - 1) {
                sum += words[i].length;
            }
        }
    }
    return sum;
};

// URL: https://leetcode.com/problems/find-words-that-can-be-formed-by-characters/

// Runtime: 92 ms, faster than 97.75% of JavaScript online submissions for Find Words That Can Be Formed by Characters.
// Memory Usage: 50.2 MB, less than 65.00% of JavaScript online submissions for Find Words That Can Be Formed by Characters.
