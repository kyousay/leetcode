/**
 * @param {number[]} tickets
 * @param {number} k
 * @return {number}
 */
 var timeRequiredToBuy = function(tickets, k) {
    let sec = 0;
    while(true) {
        for(let i = 0; i < tickets.length; i++) {
            if(tickets[i] === 0) continue;
            tickets[i] -= 1;
            sec++;
            if(i === k && tickets[k] === 0) {
                return sec;
            }
        }
    }
};

// URL: https://leetcode.com/problems/time-needed-to-buy-tickets/

// Runtime: 87 ms, faster than 42.44% of JavaScript online submissions for Time Needed to Buy Tickets.
// Memory Usage: 42.2 MB, less than 58.72% of JavaScript online submissions for Time Needed to Buy Tickets.
