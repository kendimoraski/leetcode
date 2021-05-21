/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    // return Math.floor(Math.sqrt(x))
    
    // 1. start in the middle (between 0 and x) 
    // 2. if the number in the middle times itself and truncated is x, return that number
    // 3a. if too big, go left
    // 3d. if too small, go right
    
    let left = 0
    let right = x
    while (left <= right) {
        let mid = Math.floor((left + right) / 2)
        if (mid ** 2 === x) {
            return mid
        } else if (mid ** 2 < x) {
            left = mid + 1
        } else {
            right = mid - 1
        }
    }
    return right
};