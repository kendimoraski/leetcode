/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let lastNonZeroFoundAt = 0
    // if the current element isn't 0, append it just in front of the last non-zero element we found
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[lastNonZeroFoundAt++] = nums[i]
        }
    }
    // after we finish processing the new elements, all the non-zero elements are already at the beginning of the array
    // we fill in the remaining indexes with 0's
    for (let i = lastNonZeroFoundAt; i < nums.length; i++) {
        nums[i] = 0
    }
};