/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    // LOGIC
    // first check if the target value exists in the matrix at all:
    // if it's greater than the last value of the last row or less than the first value of the first row, we immediately know it's not in the matrix
    // otherwise, use binary search to start in the middle of the matrix,
    // check if the value is at the middle, less or greater and the right or left pointer accordingly
    // if it's found, return true; if not return false
    // O(log(m * n)) m is the number of rows, n is the number is columns; we are getting rid of a set of numbers every time by using binary search

    // PSEUDO CODE
      // initialize variables to contain number of rows and number of columns
    const numRows = matrix.length
    const numCols = matrix[0].length
    
    // check if the target is less than first value of first row or greater than last value of last row
    if (target < matrix[0][0] || target > matrix[numRows - 1][numCols - 1]) {
        // if so return false
        return false
    }
  
    // initialize left and right pointers and middle index
    let left = 0
    let right = numRows * numCols - 1
    
    // WHILE LOOP DUMMY
    while (left <= right) {
        
        // initialize a midpoint
        // divide the midpoint's index by the number of columns (always the same); the result will be the row and the remainder will be the index within that row; this is matrix logic;
        const mid = Math.floor((right + left) / 2)
        
        // convert mid into the appropriate row and column distinction for the given matrix
        const row = Math.floor(mid / numCols)
        const col = mid % numCols
        
        // check if the midpoint's value is the target
        // at this point I need to get inside of an actual row in the matrix
        if (matrix[row][col] === target) {
            // if so return true
            return true
        } else if (matrix[row][col] < target) {
            left = mid + 1
           // if midpoint val is greater than target, go to the left
        } else if (matrix[row][col] > target) {
            right = mid - 1
        }
    }
    // continue this binary search until either
        // the target is found -> return true
        // the target is never found -> return false (target doesn't exist in matrix)
    return false
};