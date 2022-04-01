/**
 * @param {string[]} logs
 * @return {number}
 */
 var minOperations = function(logs) {
    let deep = 0;
    for(let i = 0; i < logs.length; i++) {
        if(logs[i].indexOf('.') === -1) {
            deep += 1;
        } else if(logs[i].indexOf('../') !== -1) {
            deep !== 0 ? deep -= 1 : deep = 0;
        }
    }
    return deep;
};

// URL: https://leetcode.com/problems/crawler-log-folder/

// Runtime: 60 ms, faster than 98.01% of JavaScript online submissions for Crawler Log Folder.
// Memory Usage: 42.3 MB, less than 78.81% of JavaScript online submissions for Crawler Log Folder.

// another answer
const minOperations = logs =>
  Math.abs(
    logs.reduce(
      (acc, curr) =>
        Math.min(0, acc + ('../' === curr ? 1 : './' === curr ? 0 : -1)),
      0,
    ),
  );

// Runtime: 60 ms, faster than 98.01% of JavaScript online submissions for Crawler Log Folder.
// Memory Usage: 42.3 MB, less than 84.77% of JavaScript online submissions for Crawler Log Folder.