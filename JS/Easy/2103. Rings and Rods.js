/**
 * @param {string} rings
 * @return {number}
 */
 var countPoints = function(rings) {
    const arr = new Array(10).fill().map(() => ({}));
    for(let i = 0; i < rings.length; i += 2) {
        const index = Number(rings[i+1]);
        if(!arr[index][rings[i]]) {
         arr[index][rings[i]] = 1;   
        }
    }
    return arr.filter(v => Object.keys(v).length === 3).length;
};

// Runtime: 51 ms, faster than 100.00% of JavaScript online submissions for Rings and Rods.
// Memory Usage: 41.9 MB, less than 47.45% of JavaScript online submissions for Rings and Rods.

// URL: https://leetcode.com/problems/rings-and-rods/

// another answer
// 文字列として考えて、3文字以上を判定すればわざわざarrayに変換する必要がないところが勉強になった。
// そもそものデータ構造の目の付け所が悪かった。

/**
 * @param {string} rings
 * @return {number}
 */
 var countPoints = function(rings) {
    const arr = new Array(10).fill('');
    for(let i = 0; i < rings.length; i += 2) {
        const index = Number(rings[i+1]);
        if(!arr[index].includes(rings[i])) {
         arr[index] += rings[i];   
        }
    }
    return arr.filter(v => v.length > 2).length;
};