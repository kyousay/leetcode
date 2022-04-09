/**
 * @param {number} x
 * @param {number} y
 * @param {number[][]} points
 * @return {number}
 */
 var nearestValidPoint = function(x, y, points) {
    let distances = []
    let min = Infinity;
    for(let [xi, yi] of points) {
        if(xi === x || yi === y) {
            const diff = Math.abs(x - xi) + Math.abs(y - yi);
            min = Math.min(diff, min);
            distances.push(diff);
            continue;
        }
        distances.push(undefined);
        
    }
    return distances.findIndex((val) => val === min);
};

// URL: https://leetcode.com/problems/find-nearest-point-that-has-the-same-x-or-y-coordinate/

// Runtime: 131 ms, faster than 51.80% of JavaScript online submissions for Find Nearest Point That Has the Same X or Y Coordinate.
// Memory Usage: 51.6 MB, less than 6.33% of JavaScript online submissions for Find Nearest Point That Has the Same X or Y Coordinate.

// another answer
/**
 * @param {number} x
 * @param {number} y
 * @param {number[][]} points
 * @return {number}
 */
 var nearestValidPoint = function(x, y, points) {
    const calculateDistance = (pts) => {
        return Math.abs(x-pts[0]) + Math.abs(y-pts[1]);
    }

    let smallestValue = Infinity;
    let smallestIndex = -1;

    points.forEach((point, index)=> {
        if(point[0]===x || point[1]===y) {
            const distance = calculateDistance(point);
            if(distance < smallestValue) {
                smallestValue = distance;
                smallestIndex = index;

            }
        }
    })
    
    return smallestIndex;
};

// Runtime: 113 ms, faster than 71.51% of JavaScript online submissions for Find Nearest Point That Has the Same X or Y Coordinate.
// Memory Usage: 50.8 MB, less than 42.73% of JavaScript online submissions for Find Nearest Point That Has the Same X or Y Coordinate.