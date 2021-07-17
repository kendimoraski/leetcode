/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let n = nums.length
    let dp = [n]
    dp[0] = nums[0]
    let max = dp[0]
    
    for (let i = 0; i < n; i++) {
        dp[i] = nums[i] + (dp[i - 1] > 0 ? dp[i - 1] : 0)
        max = Math.max(max, dp[i])
    }
    return max
};