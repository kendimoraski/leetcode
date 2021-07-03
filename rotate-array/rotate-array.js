/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    k = k % nums.length
    let count = 0
    for (let start = 0; count < nums.length; start++) {
        let current = start
        let prev = nums[start]
        do {
            let next = (current + k) % nums.length
            let temp = nums[next]
            nums[next] = prev
            prev = temp
            current = next
            count++
        } while (start !== current)
    }
}