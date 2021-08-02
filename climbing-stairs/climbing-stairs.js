/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    /*
    // We know that there are always at least n number of ways to reach the top, since you could break down each step by 1, so if n = 3, there will always be the option of going 1 + 1 + 1 step at a time
    // To reach an nth step, your previous steps could be either all 1's, one 2 step if n = 2, and if n is greater than 2, it could be a combination of 1's and 2's
    // Our base cases can be if n less than or equal to 2
    // We want to use our recursive function to get our other cases down to at most 2
    // I could break down the previous steps into groups of 2, count all these possible paths, then assume that for each pair, it could be broken into 1 + 1, but these 1's could be split across any order of the remaining subset of 2's (remaining subset.length * 2) + 1 ways! This is for EACH time a 2 is split
    // I could use recursion to break down the above lines 10 until all the numbers are 1 step each
    
    // Declare a counter that will be equal to 0 to start
    let counter = 0
    // Declare a recursive function
    function breakTwos(num) {
        // The base cases will be when n is equal to 2 or less
            // in these cases, add n to counter
        // Subtract 2 from n
        // add to the counter this new (n * 2) + 1
        // The recursive function will continue so long as n > 2
        // Call the recursive function inside itself on this new n
        if (num <= 2) {
            counter += num
        }
        const diff = breakTwos((num - 2) * 2) + 1
        counter += diff
        return counter
    }
    // invoke recursive function n
    // return counter 
    breakTwos(n)
    // return counter
    // 30 min didn't work; had to check solution
    */
    // JAVA translated solution using recursion and memoization
    const memo = {}
    return itsTheClimb(0, n, memo)
};

function itsTheClimb(i, n, memo) {
    if (i > n) return 0
    if (i === n) return 1
    if (memo[i] > 0) return memo[i]
    memo[i] = itsTheClimb(i + 1, n, memo) + itsTheClimb(i + 2, n, memo)
    return memo[i]
}