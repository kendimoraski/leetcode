/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    // edge case
    if (k === 0 || nums.length === 1) return nums
    if (k > nums.length) {
        k = k % nums.length
    }
    const ans = []
    let pointer = nums.length - k
    // this for loop simply serves to tell us how many times to iterate
    for (let _ = 0; _ < nums.length; _++) {
        // iterate to the end, and push them to an answer array
        ans.push(nums[pointer])
        // iterate pointer
        pointer++
        // move the pointer to the beginning of nums and keep adding until you hit k again   
        if (pointer === nums.length) {
            pointer = 0
        }
    }
    for (let i = 0; i < nums.length; i++) {
        nums[i] = ans[i]
    }
    return nums
};
// 20 min up