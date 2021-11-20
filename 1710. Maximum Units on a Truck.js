/**
 * @param {number[][]} boxTypes
 * @param {number} truckSize
 * @return {number}
 */
 var maximumUnits = function(boxTypes, truckSize) {
    boxTypes.sort((x, y) => y[1] - x[1]);
    let limit = truckSize;
    let units = 0;
    for(let i = 0; i < boxTypes.length; i++) {
        if(limit === 0) break;
        for(let j = 0; j < boxTypes[i][0]; j++) {
            units += boxTypes[i][1];
            limit -= 1;
            if(limit === 0) break;
        }
    }
    return units
};

// Runtime: 96 ms, faster than 52.93% of JavaScript online submissions for Maximum Units on a Truck.
// Memory Usage: 41.6 MB, less than 42.82% of JavaScript online submissions for Maximum Units on a Truck.

// URL: https://leetcode.com/problems/maximum-units-on-a-truck/