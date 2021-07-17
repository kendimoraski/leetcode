/**
 * @param {number[]} arr
 * @param {number} target
 * @return {number}
 */
var findBestValue = function(arr, target) {
    /*
    // We need to know the current sum of the array and its relation to target
    // The difference between the target and the current sum, will need to be reduced as much as possible
    // We can manage the reduction by attempting to (evenly?) distribute new values across the integers in `arr`
    // The more integers there are in `arr`, the less we would have to adjust each integer's value
    // ...and therefore the `value` we return ultimately could be higher
    
    // Get the current sum of the array
    const initialSum = arr.reduce((acc, curr) => {
        return acc += curr
    }, 0)
    // Get the difference between target and current sum (absolute)
    const initialDifference = Math.abs(target - initialSum)
    // Divide that difference by the number of elements in the array => save this as `value`
    const value = Math.floor(initialDifference / (arr.length - 1))
    // Loop through the array
    let newSum = 0
    for (let i = 0; i < arr.length; i++) {
        // If a current element in the array exceeds value
        if (arr[i] > value) {
            // change it to value                    
            arr[i] = value
        }
        newSum += arr[i]
    }
    // Check if the new sum is closer in absolute difference to target (it should be)
    // return the value
    return value
    // 30 min no luck
    */
    // TRANSLATED FROM USER-SUBMITTED JAVA SOLUTION
    arr.sort((a, b) => a - b);
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        const lengthOfNumsToRight = arr.length - i;
        const currentNum = arr[i];
        if (sum + (currentNum * lengthOfNumsToRight) > target) {
            return Math.ceil((target - sum) / lengthOfNumsToRight - 0.5);
        }
        sum += currentNum;
    }

    return arr[arr.length - 1];
};