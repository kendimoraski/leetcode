/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let pointer = 0
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== val) {
            nums[pointer] = nums[i]
            pointer++
        }
    }
    return pointer
};