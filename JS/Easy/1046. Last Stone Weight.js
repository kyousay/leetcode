/**
 * @param {number[]} stones
 * @return {number}
 */
 var lastStoneWeight = function(stones) {
    while(stones.length > 1) {
        stones.sort((x, y) => x - y);
        if(stones[stones.length - 1] === stones[stones.legth - 2]) {
            stones = stones.slice(0, -2);
            continue;
        }
        stones[stones.length - 2] = stones[stones.length - 1] - stones[stones.length - 2];
        stones = stones.slice(0, -1);
    }
    return stones;
};

// URL: https://leetcode.com/problems/last-stone-weight/

// Runtime: 71 ms, faster than 76.55% of JavaScript online submissions for Last Stone Weight.
// Memory Usage: 43.3 MB, less than 53.73% of JavaScript online submissions for Last Stone Weight.

// another answer
var lastStoneWeight = function(stones) {
    
    while(stones.length > 1){
    stones = stones.sort((a,b)=> b-a);
        let temp = stones[0] - stones[1];
        if(stones[1] == stones[0]){
            stones.splice(0, 2);
        }else if(stones[1] != stones[0]){
            stones.splice(0, 2, temp);
        }
    }
    return stones;
};

// Runtime: 60 ms, faster than 93.82% of JavaScript online submissions for Last Stone Weight.
// Memory Usage: 44 MB, less than 23.24% of JavaScript online submissions for Last Stone Weight.