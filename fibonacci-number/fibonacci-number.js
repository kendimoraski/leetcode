/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    // top-down dynamic programming (using memoization)
    const memo = {}
    
    const fibHelper = n => {
        if (memo[n]) {
            return memo[n]
        }
        if (n === 0) {
            return 0
        }
        if (n === 1) {
            return 1
        }
        
        memo[n] = fibHelper(n - 1) + fibHelper(n - 2)
        return memo[n]
    }
    return fibHelper(n)
};