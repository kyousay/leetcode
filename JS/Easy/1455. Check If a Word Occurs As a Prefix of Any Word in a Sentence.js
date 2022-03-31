/**
 * @param {string} sentence
 * @param {string} searchWord
 * @return {number}
 */
 var isPrefixOfWord = (sentence, searchWord) => {
    const index = sentence.split(' ').findIndex(s => s.indexOf(searchWord) === 0);
    return index === -1 ? -1 : index + 1;
}

// URL: https://leetcode.com/problems/check-if-a-word-occurs-as-a-prefix-of-any-word-in-a-sentence/

// Runtime: 64 ms, faster than 80.15% of JavaScript online submissions for Check If a Word Occurs As a Prefix of Any Word in a Sentence.
// Memory Usage: 41.8 MB, less than 63.36% of JavaScript online submissions for Check If a Word Occurs As a Prefix of Any Word in a Sentence.

// another answer1
// substringで文字を切り取る考えは面白いと思った
/**
 * @param {string} sentence
 * @param {string} searchWord
 * @return {number}
 */
 var isPrefixOfWord = function(sentence, searchWord) {
    let splitSentence = sentence.split(' ');
    for(var i=0; i<splitSentence.length; i++){
        if(splitSentence[i].substring(0, searchWord.length) == searchWord) return i+1;
    }
    return -1;
};

// Runtime: 91 ms, faster than 32.06% of JavaScript online submissions for Check If a Word Occurs As a Prefix of Any Word in a Sentence.
// Memory Usage: 42.1 MB, less than 35.88% of JavaScript online submissions for Check If a Word Occurs As a Prefix of Any Word in a Sentence.


// another answer2
/**
 * @param {string} sentence
 * @param {string} searchWord
 * @return {number}
 */
 var isPrefixOfWord = function(sentence, searchWord) {
    let splitSentence = sentence.split(' ');
    for(var i=0; i<splitSentence.length; i++){
        if(splitSentence[i].indexOf(searchWord) === 0) return i+1;
    }
    return -1;
};
// Runtime: 52 ms, faster than 98.47% of JavaScript online submissions for Check If a Word Occurs As a Prefix of Any Word in a Sentence.
// Memory Usage: 42.3 MB, less than 9.16% of JavaScript online submissions for Check If a Word Occurs As a Prefix of Any Word in a Sentence.