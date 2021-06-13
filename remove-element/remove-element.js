/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    // first pointer
    let i = 0
    // for loop (we have to check every value in the array) including the second pointer
    for (let j = 0; j < nums.length; j++) {
        // if the element at second pointer is NOT `val`
        if (nums[j] !== val) {
            // change the element at index i to the valid value at index j
            nums[i] = nums[j]
            // increase i
            i++
        }
    }
    // 
    return i
};