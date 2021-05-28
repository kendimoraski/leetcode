/**
 * @param {number[][]} mat
 * @return {number[]}
 */
var findDiagonalOrder = function(mat) {
    // the pattern I notice is that while going in the up-right direction, you decrease the row and increase the col
    // while going down-left, you increase the row, and decrease the col
    // this is reflected in the indexes of `mat` and the subarrays
    // I would simply need to push to an output array while traversing `mat` in that order
    // I need to be aware of when an edge is hit on the top or bottom (meaning no row before or after the ends of the matrix), the next integer upon changing direction is just to the right (increase col)
    // when hiting an edge on the left or right sides, just change direction down, (increase row)
    
    // initialize an output array to push to and return
    const output = []
    // initialize the numRows
    const numRows = mat.length
    // initialize the numCols
    const numCols = mat[0].length
    // initialize row = 0
    let row = 0
    // initialize col = 0
    let col = 0
    // initialize direction boolean "up" to `true`
    let up = true
    // create a for loop to iterate through every element in `mat` (the number of elements)
    for (let i = 0; i < numRows * numCols; i++) {
        // if we're on a valid value and not on an edge
        let value = mat[row][col]
        // push value to output
        output.push(value)
        // next we iterate
        if (!up) {
            row++
            col--
        } else {
            row--
            col++
        }
        // check if you're currently now outside the border above
        if (col === numCols) {
            col = numCols - 1
            row += 2
            up = !up
        } else if (row < 0) {
            // move the row back down  
            row = 0
            // if so, change up's value to change direction
            up = !up
        } else if (row === numRows) {
            row = numRows - 1
            col += 2
            up = !up
        } else if (col < 0) {
            col = 0
            up = !up
        }
    }
    // return the output
    return output
}