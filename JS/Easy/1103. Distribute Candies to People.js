/**
 * @param {number} candies
 * @param {number} num_people
 * @return {number[]}
 */
 var distributeCandies = function(candies, num_people) {
    const res = new Array(num_people).fill(0);
    let n = 0;
    while(true) {
        let i = 0;
        while(i < num_people) {
            const left = candies;
            candies -= i + 1 + n;
            if(candies <= 0) {
                res[i] += left;
                return res;
            }
            res[i] += i + 1 + n;
            if(i === (num_people - 1)) {
                i = 0;
                n += num_people;
                continue;
            }
            i++;
        }
    }
};

// URL: https://leetcode.com/problems/distribute-candies-to-people/

// Runtime: 69 ms, faster than 68.12% of JavaScript online submissions for Distribute Candies to People.
// Memory Usage: 41.8 MB, less than 75.36% of JavaScript online submissions for Distribute Candies to People.
