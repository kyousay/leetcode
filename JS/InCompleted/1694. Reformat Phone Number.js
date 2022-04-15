/**
 * @param {string} number
 * @return {string}
 */
 var reformatNumber = function(number) {
    number = number.split("-").join(" ").split(" ").join("");
	
    var ans = '', idx = 0, len = number.length;
	
    while (idx < number.length) {
        if (len <= 4) {
            if (len == 3) {
                ans += number.slice(idx, idx + 3);
                idx += 3;
                len -= 3;
                ans += "-";
            }
            else if (len == 4 || len == 2) {
                ans += number.slice(idx, idx + 2);
                ans += "-";
                idx += 2; len -= 2;
            }
        } else {
            ans += number.slice(idx, idx + 3);
            idx += 3; len -= 3;
            ans += '-';
        }
    }
    return ans.slice(0, ans.length-1); 
};

// URL: https://leetcode.com/problems/reformat-phone-number/