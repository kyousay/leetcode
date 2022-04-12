/**
 * @param {string} word
 * @return {number}
 */
 var countVowelSubstrings = function(word) {
    let array2 = ['a','i','u','e','o']
    array2.sort()
    let count=0
    for(let i=0;i<word.length-4;i++){
        for(let j=4;j<word.length;j++){
            let array1 = Array.from(new Set(word.slice(i,j+1).split("")))
            array1.sort()
            if(JSON.stringify(array1)==JSON.stringify(array2)){
                count+=1
            }
        }
    }
    return count
};

// URL: https://leetcode.com/problems/count-vowel-substrings-of-a-string/

// Runtime: 1313 ms, faster than 5.88% of JavaScript online submissions for Count Vowel Substrings of a String.
// Memory Usage: 48.3 MB, less than 21.18% of JavaScript online submissions for Count Vowel Substrings of a String.