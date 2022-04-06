/**
 * @param {number[]} cost
 * @return {number}
 */
 var minimumCost = function(cost) {
    cost.sort((x, y) => x - y);
    let sum = 0;
    let count = 0;
    for(let i = cost.length - 1; 0 <= i; i--) {
        count++;
        if(count % 3 === 0) continue;
        sum += cost[i];
    }
    return sum;
};

// URL: https://leetcode.com/problems/minimum-cost-of-buying-candies-with-discount/

// Runtime: 103 ms, faster than 28.75% of JavaScript online submissions for Minimum Cost of Buying Candies With Discount.
// Memory Usage: 42.4 MB, less than 78.75% of JavaScript online submissions for Minimum Cost of Buying Candies With Discount.

// another answer
var minimumCost = function(cost) {
    cost.sort((a, b) => b - a);
    let result = 0;
    
    for (let i = 0; i < cost.length; i += 3) {
        result += cost[i] + (cost[i + 1] || 0);
    }
    
    return result;
};

// Runtime: 60 ms, faster than 95.63% of JavaScript online submissions for Minimum Cost of Buying Candies With Discount.
// Memory Usage: 43 MB, less than 23.75% of JavaScript online submissions for Minimum Cost of Buying Candies With Discount.