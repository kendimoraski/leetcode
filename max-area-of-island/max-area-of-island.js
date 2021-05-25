/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
    // LOGIC
    // iterate through the grid by rows and columns (a given space is [row][column])
    // find the spaces that are land
    // see if they are connected up, down, left, right with other land spaces
    // keep a running tab of the maximum area found so far
    // when I finish going through the grid, return the island with the most area
    
    // PSEUDO CODE
    // set an external variable to keep track of the running max area
    let overallMax = 0

    // initialize variables to contain rows and columns
    const numRows = grid.length
    const numCols = grid[0].length
    
    // if it's land, check if there is neighboring land horizontally and vertically
    // horizontally neighboring land would be that space's column  + 1 in the same row
    // vertically neighboring land would be that space's same index but in the following row (if it exists)
    // use a recursive function to check if there exists land horizontally or vertically every time I find a piece of land and ultimately return the size of the island
    function getIslandSize(row, col) {
        // base case
        if (grid[row][col] === 0) return 0
        
        // sink it!
        grid[row][col] = 0
        
        let left = 0
        let right = 0
        let up = 0
        let down = 0
        // recursive cases incl. edge cases
        // check if the space to the left is land
        if (col - 1 >= 0) {
            left = getIslandSize(row, col - 1)
        }
        // check if the space to the right is land 
        if (col + 1 < numCols) {
            right = getIslandSize(row, col + 1)
        }
        // check if the space up is land
        if (row - 1 >= 0) {
            up = getIslandSize(row - 1, col)
        }
        // check if the space down is land
        if (row + 1 < numRows) {
            down = getIslandSize(row + 1, col)
        }

        return left + right + up + down + 1
        // recursion ends when no more land up, down, right
    }
    
    // create a nested for loop to iterate through the ENTIRE grid
    for (let row = 0; row < numRows; row++) {
        // in the inner for loop (within the row, per column):
        for (let col = 0; col < numCols; col++) {
            // when you get to an island
            if (grid[row][col] === 1) {                    
                // the currentMax is the recursive call
                const currentMax = getIslandSize(row, col)
                // compare the total area of that island with the running max area and reassign if necessary
                overallMax = Math.max(currentMax, overallMax)
            }
        }
    }  
    // when we finish the the for loops, we've searched the entire grid, return max area
    return overallMax
};