/**
 * @param {number} num
 * @return {number}
 */
 var countEven = function(num) {
    const arr = [];
    for(let i = 0; i < num; i++) {
        const index = i + 1;
        if(index < 10) {
            index % 2 === 0 && arr.push(index);
            continue;
        };
        index.toString().split('').reduce((acc, cur) => acc += Number(cur),0) % 2 === 0 && arr.push(index);
    }
    
    return arr.length;
};

// URL: https://leetcode.com/problems/count-integers-with-even-digit-sum/

// ntime: 64 ms, faster than 92.56% of JavaScript online submissions for Count Integers With Even Digit Sum.
// Memory Usage: 44.4 MB, less than 33.97% of JavaScript online submissions for Count Integers With Even Digit Sum.

