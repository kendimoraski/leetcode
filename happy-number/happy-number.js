/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    // break n into individual (single) digits
    // square each digit (multiply it by itself)
    // add these squares together
    // check if the sum equals 1
    //// if the sum equals 1, return true
    //// if the sum does not, repeat
    //// base case is when sum equals 1 or we've seen the number, meaning it's already been stored in memo b/c we've gone through all possible combinations between 1 and 162
    // repeat the same process until the sum equals 1
    
     const mySet = new Set()
     
     function recurseMe(x) {
        let sum = 0
        while (x !== 0) {
            sum += (x % 10) ** 2
            x = Math.floor(x / 10)
        }
        if (sum === 1) {
            return true
        } else if (mySet.has(sum)) {
            return false
        } else {
            mySet.add(sum)
            return recurseMe(sum)
        }
     }
    return recurseMe(n)
};
// Time O(n) because the while loop runs worst-case scenario 10 times based off of the constraints; the max number of runs through the while loop is 10 meaning the while loop itself is O(1)
// Space O(2n) which is O(n)