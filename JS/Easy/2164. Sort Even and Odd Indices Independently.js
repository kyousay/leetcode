/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var sortEvenOdd = function(nums) {
    const even = [];
    const odd = [];
    for(let i = 1; i <= nums.length; i++) {
        if(i % 2 === 0) {
            even.push(nums[i - 1]);
        } else {
            odd.push(nums[i - 1]);
        }
    }
    even.sort((x, y) => y - x);
    odd.sort((x, y) => x - y);
    
    const res = [];
    for(let i = 1; i <= nums.length; i++) {
        if(i % 2 === 0) {
            res.push(even[0]);
            even.shift();
        } else {
            res.push(odd[0]);
            odd.shift();
        }
    }
    
    return res;
};

// URL: https://leetcode.com/problems/sort-even-and-odd-indices-independently/

// Runtime: 96 ms, faster than 68.87% of JavaScript online submissions for Sort Even and Odd Indices Independently.
// Memory Usage: 44.7 MB, less than 33.50% of JavaScript online submissions for Sort Even and Odd Indices Independently.

// another answer1
// numsを直接操作するのは思いつかなかった
// 可変長配列を使うよりメモリも消費しないため、Counterを定義した方が良い
var sortEvenOdd = function(nums) {
    const numsOddIndex = []
    const numsEvenIndex = []
    
    for (let i = 0; i < nums.length; i++) {
        i % 2 === 0 ? numsEvenIndex.push(nums[i]) : numsOddIndex.push(nums[i])
    }
    
    numsOddIndex.sort((a, b) => b -a)
    numsEvenIndex.sort((a, b) => a -b)
  
    let oddCounter = 0, evenCounter = 0
    for (let i = 0; i < nums.length; i++) {
       if (i % 2 === 0) {
           nums[i] = numsEvenIndex[evenCounter]
           evenCounter++
       } else {
           nums[i] = numsOddIndex[oddCounter]
           oddCounter++
       }
    }
    return nums
  };

// Runtime: 100 ms, faster than 65.31% of JavaScript online submissions for Sort Even and Odd Indices Independently.
// Memory Usage: 44.1 MB, less than 89.00% of JavaScript online submissions for Sort Even and Odd Indices Independently.


// another answer2
var sortEvenOdd = function(nums) {

    let odd= nums.filter((num,i,arr)=> i%2!=0).sort((a,b)=> b-a);  //decreasing order
    let even= nums.filter((num,i,arr)=> i%2==0).sort((a,b)=> a-b); //increasing order
    let x=0,y=0;
        
       nums.forEach((num,i,nums)=> {
            nums[i]= i%2==0 ? even[x++] : odd[y++];       //refilling the array 
        });
        return nums;
    };

// Runtime: 107 ms, faster than 57.19% of JavaScript online submissions for Sort Even and Odd Indices Independently.
// Memory Usage: 44 MB, less than 89.00% of JavaScript online submissions for Sort Even and Odd Indices Independently.