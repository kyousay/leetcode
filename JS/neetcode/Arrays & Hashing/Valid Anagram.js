class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length) return false;
        
        const sArr = Array.from(s).sort((x, y) => x.codePointAt() - y.codePointAt());
        const tArr = Array.from(t).sort((x, y) => x.codePointAt() - y.codePointAt());
        for(let i = 0; i < sArr.length; i++) {
            if(sArr[i] !== tArr[i]) return false;
        }

        return true;
    }
}

// URL: https://neetcode.io/problems/is-anagram

// another answer1
// splitとjoinを使えば良いという発想がなかった
class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length) return false;

        const sSort = s.split('').sort().join()
        const tSort = t.split('').sort().join()

        return sSort === tSort;
    }
}

// another answer2
// アルファベットの数で+-を計算するという発想がなかった
class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) {
            return false;
        }

        const count = new Array(26).fill(0);
        for (let i = 0; i < s.length; i++) {
            count[s.charCodeAt(i) - 'a'.charCodeAt()]++;
            count[t.charCodeAt(i) - 'a'.charCodeAt()]--;
        }
        return count.every(val => val === 0);
    }
}