/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    /*
    // starting at the end of the given `matrix` array, we take the index 0's of each and move them, in order, to the index 0 of matrix, using pointers to save the values currently there, and swap them as we go
    // the last value of each will present a problem, so either don't swap the last time, or push it onto the last index of matrix and deal with it later
    
    let row = 0
    let col = 0
    
    // define a for loop starting at the last element in matrix
    for (let i = matrix.length - 1; i >= 1; i--) {
        for (let j = 0; j < matrix.length; j++) {
            let temp = matrix[i][j]
            console.log(temp)
            matrix[i][j] = matrix[row][col]
            matrix[row][col] = temp
            col++
        }
    }  
    
    // 30 MIN
    */
    
    // TRANSLATED JAVA SOLUTION
    let n = matrix.length
    for (let i = 0; i < Math.floor((n + 1) / 2); i++) {
        for (let j = 0; j < Math.floor(n / 2); j++) {
            let temp = matrix[n - 1 - j][i]
            matrix[n - 1 - j][i] = matrix[n - 1 - i][n - j - 1]
            matrix[n - 1 - i][n - j - 1] = matrix[j][n - 1 - i]
            matrix[j][n - 1 - i] = matrix[i][j]
            matrix[i][j] = temp
        }
    }
};