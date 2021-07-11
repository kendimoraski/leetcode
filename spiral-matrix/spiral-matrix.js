/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    // LOGIC 
    // I can approach this problem by navigating USING A SINGLE FOR LOOP through the 2D array using matrix[row][col]
    // As I traverse through the array, I can mark each element as 'visited' by storing them in the output array
    // to save space, I could use this output array to double as my memo table to check against if a value has been visited, but it would increase time complexity to check if the array includes the next element
    // to save on time but add more space, I can use a separate hash table to store the visited nodes and push them to the output array separately and simultaneously
    // alternatively, if array manipulation is allowed, I can change each visited value to a string 'x'
    // The trick will be when I reach the right edge of the matrix, I will tell the iterator to instead turn and go down
    // when it reaches the bottom edge, I will tell it to turn right
    // when it reaches the left edge, I will tell it to turn up
    // both edges of the matrix AND VISITED ELEMENTS will be signals to trigger a turn in direction, corresponding to the previous direction
    // assumptions: 
        // spiral is always going in a clockwise direction inwards
    
    // PSEUDO CODE: 
    // initialize output array, hash table, numRows, numCols
    const output = []
    const numRows = matrix.length
    const numCols = matrix[0].length
    
    const seen = []
    for (let i = 0; i < numRows; i++) {
        const seen_row = []
        for (let j = 0; j < numCols; j++) {
            seen_row.push(false)
        }
        seen.push(seen_row)
    }
    console.log(seen)
    
    // initialize variables for row and col
    let row = 0
    let col = 0
    // initialize the array for directions
    const dr = [0, 1, 0, -1]
    const dc = [1, 0, -1, 0]
    // initialize a directions index starting at 0 because we're going right first
    let dirIndex = 0
    // edge case 
    if (matrix.length === 0) return output
    
    // single for loop through the matrix
    for (let i = 0; i < numRows * numCols; i++) {
        // these variables save typing time
        output.push(matrix[row][col])
        seen[row][col] = true
        let deltaRow = row + dr[dirIndex]
        let deltaCol = col + dc[dirIndex]
        // if you hit a visited number
        if (0 <= deltaRow && deltaRow < numRows && 0 <= deltaCol && deltaCol < numCols && !seen[deltaRow][deltaCol]) {
            // go back the way you came from
            row = deltaRow
            col = deltaCol
        } else {
            dirIndex = (dirIndex + 1) % 4
            // increase row and column in the correct direction
            row += dr[dirIndex]
            col += dc[dirIndex]
        }
    }
    // return the output array when the loop is finished
    return output
};