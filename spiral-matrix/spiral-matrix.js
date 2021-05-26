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
    const hash = {}
    const numRows = matrix.length
    const numCols = matrix[0].length
    // initialize variables for row and col
    let row = 0
    let col = 0
    // initialize the array for directions
    const directions = [[0, 1], [1, 0], [0, -1], [-1, 0]]
    // initialize a directions index starting at 0 because we're going right first
    let dirIndex = 0
    // single for loop through the matrix
    for (let i = 0; i < numRows * numCols; i++) {
        // these variables save typing time
        let value = matrix[row][col]
        const deltaRow = directions[dirIndex][0]
        const deltaCol = directions[dirIndex][1]
        // if you hit a visited number
        if (hash[value]) {
            // go back the way you came from
            row -= directions[dirIndex][0]
            col -= directions[dirIndex][1]
            // change direction
            dirIndex = (dirIndex + 1) % 4
            // increase row and column in the correct direction
            row += directions[dirIndex][0]
            col += directions[dirIndex][1]
            // update the value because integers are set by value
            value = matrix[row][col]
        }
        // push its value to the output array 
        output.push(value)
        // store it in the hash table
        hash[value] = true
        // if I reach an edge
        if (col + deltaCol === numCols || row + deltaRow === numRows || col + deltaCol < 0 || row + deltaRow < 0) {
            // change direction
            dirIndex = (dirIndex + 1) % 4
        }
        // increment row and column every time no matter what 
        row += directions[dirIndex][0]
        col += directions[dirIndex][1]
    }
    // return the output array when the loop is finished
    return output
};