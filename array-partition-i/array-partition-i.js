/**
 * @param {number[]} nums
 * @return {number}
 */

// Input: [0, 5, 6, 2, 4, 9]
// min(6, 9) + min(5, 4) + min(0, 2)
// Output: 10

var arrayPairSum = function(nums) {
    let maxSum = 0
    // hash table COULD be better if that could be used for this problem, but it needs to be sorted and the hash table in JS won't sort them
    
    nums.sort((a, b) => a - b)
    
    // nums.slice(Math.min(nums), )

    for (let i = 0; i < nums.length; i += 2) {

        maxSum += nums[i]
    }
    return maxSum
}; // time O(n log n) space O(1)