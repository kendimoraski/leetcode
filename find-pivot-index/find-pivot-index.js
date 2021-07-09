/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    // LOGIC
    // Since we are concerned with the leftmost pivot index, we can start from index 1 (if we started an index 0, the left sum would be 0) and then compare that to the right sum
    // we move to the right comparing as we go until we either reach a point where left sum and right sum are equal to each other or -1 if never
    
    // PSEUDOCODE
    // initialize a total sum
    let totalSum = 0
    // initialize a leftSum
    let leftSum = 0
    
    // first use a for loop starting at index 2
    for (let i = 0; i < nums.length; i++) {
        // add the value at this index to rightSum
        // loop through whole array so rightSum is the accumulated values of index 2 through nums.length - 1
        totalSum += nums[i]
    }
    // use a for loop starting at index 1
    for (let i = 0; i < nums.length; i++) {
        // compare if the current leftSum is equal to the rightSum
        // if it is, return i
        if (leftSum === totalSum - leftSum - nums[i]) return i
        // subtract the value of i + 1 from rightSum
        leftSum += nums[i]
    }
    // when the loop finishes, no pivot index has been found so return -1
    return -1
};