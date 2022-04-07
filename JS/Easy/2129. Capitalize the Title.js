/**
 * @param {string} title
 * @return {string}
 */
 var capitalizeTitle = function(title) {
    const str = title.split(' ');
    return str.map(s => {
        if(s.length <= 2) {
            return s.toLowerCase();
        }
        return s.split('').map((c, index) => index === 0 ? c.toUpperCase() : c.toLowerCase()).join('');
    }).join(' ')
};

// URL: https://leetcode.com/problems/capitalize-the-title/

// Runtime: 99 ms, faster than 32.48% of JavaScript online submissions for Capitalize the Title.
// Memory Usage: 43.2 MB, less than 43.02% of JavaScript online submissions for Capitalize the Title.

// another answer
var capitalizeTitle = function(title) {
    let result = []
    for(let i of title.split(' ')) {
        if(i.length < 3) result.push(i.toLowerCase());
        else {
            result.push(i.slice(0, 1).toUpperCase() + i.slice(1).toLowerCase());
        }
    }
    
    return result.join(' ');
};

// Runtime: 64 ms, faster than 91.17% of JavaScript online submissions for Capitalize the Title.
// Memory Usage: 44.3 MB, less than 20.23% of JavaScript online submissions for Capitalize the Title.