/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  // 1. unpivot the array by finding where it decrements (O(n))
  // 2. then, start at the middle
// 3a. if mid is less than target, go right
    // 3b. if mid is greater than target, go left
    // 4a. return index that target is found
    // 4b. if target not found when pointers cross, then return -1
    
    // let me try to set up the binary search for O(log n)
    // first, find the lowest integer
    let left = 0
    let right = nums.length - 1
    let lowest
    
    if (target === nums[0]) return 0
    if (nums.length === 1) {
        return nums[0] === target ? 0 : -1
    }
    
    // check if there even is a rotation
    if (nums[left] < nums[right]) {
        lowest = left
    } else {
        // pivoted point is the lowest integer
        while (left <= right) {
            lowest = Math.floor((left + right) / 2)
            if (nums[lowest] < nums[lowest - 1]) {
                break
            // we know that we haven't gone far right enough to hit lowest if the number is still greater than the pivot point
            } else if (nums[lowest] >= nums[0]) {
                left = lowest + 1
            } else if (nums[lowest] < nums[0]) {
                right = lowest - 1
            }
        }
    }
    // if there's no pivot
    if (lowest === 0) {
        left = 0
        right = nums.length - 1
    } else if (target > nums[0]) {
        left = 1
        right = lowest - 1
    } else if (target < nums[0]) {
        left = lowest
        right = nums.length - 1
    }
    
    while (left <= right) {
        let mid = Math.floor((left + right) / 2)
        if (nums[mid] === target) {
            return mid
        } else if (nums[mid] > target) {
            right = mid - 1
        } else {
            left = mid + 1
        }
    }
    return -1
};