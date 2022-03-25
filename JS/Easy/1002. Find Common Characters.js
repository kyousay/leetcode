/**
 * @param {string[]} words
 * @return {string[]}
 */
 var commonChars = function(words) {
    const res = [];
    
    let minLength = Infinity;
    let index = 0;
    for(let i = 0; i < words.length; i++) {
        if(minLength > words[i].length) {
            index = i;
            minLength = words[i].length;
        }
    }
    
    
    for(let i = 0; i < words[index].length; i++) {
        const tmpArr = [];
        for(let j = 0; j < words.length; j++) {
            if(j === index) continue;
            const findIndex = words[j].indexOf(words[index][i]);
            if(findIndex === -1) break;
            tmpArr.push(j);
            words[j] = words[j].replace(words[j][findIndex], '');
            if(j === words.length - 1) {
                if(tmpArr.length === words.length - 1) {
                    res.push(words[index][i]);
                }
            }
        }
    }
    
    return res;
};

// URL: https://leetcode.com/problems/find-common-characters/

// Runtime: 91 ms, faster than 74.02% of JavaScript online submissions for Find Common Characters.
// Memory Usage: 46.9 MB, less than 45.14% of JavaScript online submissions for Find Common Characters.

// another answer
var commonChars = function(words) {
    let arr = [];
    for(let char of words[0]){
        let isCommon = true;
        for(let i=1;i<words.length;i++){
            if(words[i].includes(char)){
                words[i] = words[i].replace(char, '');
            }
            else{
                isCommon = false;
                break;
            }
        }
        if(isCommon) arr.push(char);
    }
    return arr;
};

// Runtime: 76 ms, faster than 90.29% of JavaScript online submissions for Find Common Characters.
// Memory Usage: 45.4 MB, less than 71.65% of JavaScript online submissions for Find Common Characters.