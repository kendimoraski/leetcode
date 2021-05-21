/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// Input: nums = [2, 5, 6, 7], target = 1
// Output: 0

var searchInsert = function(nums, target) {
    // 1. start in the middle
    // 2a. if the current num is target, return the index
    // 2b. if it's less than the target, go right
    // 2c. if it's greater than the target, go left
    // 3. repeat until target is found OR the place where the target would be found is
    // 3a. This could be when left and right are immediately next to each other AND neither is the target  
    // 4. return that index either way
    
    // initialize the indexes
    let left = 0
    let right = nums.length - 1
    while (left <= right) {
        let mid = Math.floor((left + right) / 2)
        if (nums[mid] === target) {
            return mid
        } else if (nums[mid] < target) {
            left = mid + 1
        } else if (nums[mid] > target) {
            right = mid - 1
        }
    }
    return right + 1
};