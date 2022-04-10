/**
 * @param {number} n
 * @return {number}
 */
 var countTriples = function(n) {
    let count = 0;
    for(let i = 5; i <= n; i++) {
        for(let j = 1; j < i; j++) {
            for(let k = j + 1; k < i; k++) {
                if((Math.pow(j, 2) + Math.pow(k, 2)) === Math.pow(i, 2)) {
                    count++;
                }      
            }
        }
    }
    return count * 2;
};

// URL: https://leetcode.com/problems/count-square-sum-triples/

// Runtime: 270 ms, faster than 31.87% of JavaScript online submissions for Count Square Sum Triples.
// Memory Usage: 42.3 MB, less than 68.13% of JavaScript online submissions for Count Square Sum Triples.

// another answer
var countTriples = function(n) {
    const n2 = n*n;
    
    let ans = 0;
    for (let a = 1; a <= n; a++) {
        for (let b = a + 1; b <= n; b++) {
            const a2PLusb2 = a*a + b*b;
            if (a2PLusb2 > n2) break;
            const c = Math.sqrt(a2PLusb2);
            if (Math.trunc(c) === c) {
                ans += 2;
            }
        }
    }
    
    return ans;
};

// Runtime: 76 ms, faster than 93.41% of JavaScript online submissions for Count Square Sum Triples.
// Memory Usage: 41.8 MB, less than 94.51% of JavaScript online submissions for Count Square Sum Triples.