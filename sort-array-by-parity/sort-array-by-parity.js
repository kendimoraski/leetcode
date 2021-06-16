/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function(nums) {
    const arr = []
    let t = 0
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] % 2 === 0) {
            arr[t++] = nums[i]
        }
    }
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] % 2 === 1) {
            arr[t++] = nums[i]
        }
    }
    return arr
};