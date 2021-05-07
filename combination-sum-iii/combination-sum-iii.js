/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
// Example
// Input: k = 2, n = 3
// Output: [[1, 2]]

var combinationSum3 = function(k, n) {
    const output = []
    const currCombo = []
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    // need recursion; incorporates backtracking (formula to find every single possible combination, in this case to add up to sum n)
    // small constraints like this one is also a sign it's backtracking
    function adder(currK, currN, currCombo, array) {
         // base case   
        if (currN === 0 && currK === 0) {
            output.push([...currCombo])
            return
        }
        if (currK === 0) return
        for (let i = 0; i < array.length; i++) {
            currCombo.push(array[i])
            adder(currK - 1, currN - array[i], currCombo, array.slice(i + 1))
            currCombo.pop()
        }
    }
    adder(k, n, currCombo, arr)
    return output
};