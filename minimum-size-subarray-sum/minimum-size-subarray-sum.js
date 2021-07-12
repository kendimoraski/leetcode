/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    /*
    // Sliding Window
    // utilize the right and left edge of a sliding window that will extend and retract as we iterate through the array
    // we will compare the sums of the values inside the window with the target, and find the shortest length window that equals or exceeds the target
    // we extend the window when the sum is less than target
    // before we retract, we need to compare with the prev min length
    // we retract the window when the sum is greater than or equal to target
    
    // initialize left edge to zero
    let left = 0
    // initialize right edge to zero
    let right = 0
    // initialize a prevMinLength var to Infinity; we will return this
    let prevMinLength = Infinity
    // initialize a running sum to the first value of nums
    let runningSum = nums[0]
    // create a loop that will exit when right hits the edge
    while (right < nums.length) {
        // compare the running sum to the target
        // if it's greater than or equal to target
        if (runningSum >= target) {
            // compare the current length with the prev min length
            if (nums.slice(left, right).length < prevMinLength) {
                // if less, replace prevMinLength w/ current length
                prevMinLength = nums.slice(left, right).length
                // if prevMinLength equals 1, return 1 because we can't go any shorter
                if (prevMinLength === 1) return 1
            }
            // subtract the value at left edge from running sum
            runningSum -= nums[left]
            // increment left
            left++
        // if running sum is less than target        
        } else {
            // increment right
            right++
            // if right !== nums.length add value at new right to running sum
            if (right !== nums.length) {
                runningSum += nums[right]
            }
        }
        console.log('nums[left]', nums[left], 'nums[right]', nums[right], 'prevMinLength', prevMinLength)
    }
    // return prevMinLength
    return prevMinLength === Infinity ? 0 : prevMinLength
    */ // 30 min and couldn't get it to pass
    
    // C++ TRANSLATION
    let ans = Infinity
    let left = 0
    let sum = 0
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i]
        // while the current sum is greater than or equal to the target
        while (sum >= target) {
            // reassign ans to the minimum value comparing (current) ans with i + 1 - left (which would be the value to the right minus the left)
            ans = Math.min(ans, i + 1 - left)
            // subtract the value nums at left++ from sum
            sum -= nums[left++]
        }
    }
    return ans !== Infinity ? ans : 0
};