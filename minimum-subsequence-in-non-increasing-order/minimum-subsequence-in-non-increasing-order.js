/**
 * @param {number[]} nums
 * @return {number[]}
 */
var minSubsequence = function(nums) {
    nums.sort((a, b) => b - a)
    let includedSum = 0
    const includedArray = []
    let nonIncludedSum = 0
    let i = 0
    while (includedSum <= nonIncludedSum) {
        includedArray.push(nums[i])
        const nonIncludedArray = nums.slice(i + 1)
        includedSum += nums[i]
        nonIncludedSum = nonIncludedArray.reduce((acc, curr) => {  
            return acc += curr
        }, 0)
        i++
        console.log(includedArray)
    }        
    return includedArray
};