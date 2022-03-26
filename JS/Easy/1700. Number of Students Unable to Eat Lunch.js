/**
 * @param {number[]} students
 * @param {number[]} sandwiches
 * @return {number}
 */
 var countStudents = function(students, sandwiches) {
    while(sandwiches.length !== 0) {
        for(let i = 0; i < students.length;) {
            if(sandwiches[0] === students[0]) {
                sandwiches.shift();
                students.shift();
                i = 0;
                continue;
            }
            students.push(students[0]);
            students.shift();
            if(i === students.length - 1) {
                return students.length;
            }
            i++;
        }
    }
    return 0;
};
// iの加算タイミングが、繰り返し分の実行後/次のループ処理実行条件評価の前だというところで詰まった

// URL: https://leetcode.com/problems/number-of-students-unable-to-eat-lunch/

// Runtime: 75 ms, faster than 71.22% of JavaScript online submissions for Number of Students Unable to Eat Lunch.
// Memory Usage: 41.9 MB, less than 71.22% of JavaScript online submissions for Number of Students Unable to Eat Lunch.