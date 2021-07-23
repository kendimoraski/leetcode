/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var kthFactor = function(n, k) {
    if (n === 1) return 1
    const ans = []
    // loop up to the square root of `n`
    for (let i = 1; i <= Math.floor(Math.sqrt(n)); i++) {
        if (n % i === 0) {
            ans.push(i)
        }
    }
    
    for (let j = ans.length - 1; j >= 0; j--) {
        if (ans[j] !== n / ans[j]) {
            ans.push(n / ans[j])     
        }
    }
    
    return ans[k - 1] ? ans[k - 1] : -1
};