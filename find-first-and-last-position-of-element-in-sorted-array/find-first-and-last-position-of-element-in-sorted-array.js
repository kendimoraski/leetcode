/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    // binary search for the first instance of target
    let left = 0
    let right = nums.length - 1
    let mid = Math.floor((left + right) / 2)
    const positions = [-1, -1]
    
    while (left <= right) {
        mid = Math.floor((left + right) / 2)
        if (nums[mid] === target && nums[mid - 1] !== target) {
            positions[0] = mid
            break
        }
        else if (nums[mid] < target) {
            left = mid + 1
        }
        else {
            right = mid - 1
        }
    }
    
    // then binary search again from the first instance to the end of the array
    left = positions[0]
    right = nums.length - 1
    
    while (left <= right) {
        mid = Math.floor((left + right) / 2)
        if (nums[mid] === target && nums[mid + 1] !== target) {
            positions[1] = mid
            break
        }
        // even though at this point we would be after the first instance of target so we know it shouldn't be less than target ever, but just in case we use <= instead of === here
        else if (nums[mid] <= target) {
            left = mid + 1
        }
        else {
            right = mid - 1
        }
    }
    return positions
};