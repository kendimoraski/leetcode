/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    // Right away I know we need to eventually traverse the entire grid, no questions asked, because we need to check if there are any islands and they could be in any space at any point in the graph
    // We can start in the top left corner where row = 0 and col = 0
    // Normal direction will be iterating to the right and down
    // We'll need to use a recursive function that will check all directions around an island when it's first hit, and see if there is any land connecting to it (meaning part of the same island)
    // We have to remember to sink that island completely so that when we proceed on the normal iteration, it's not counted as a new separate island
    // We have to remember the edges of the grid as well
    
    // Ultimately we need to return an islandCount
    let islandCount = 0
    // initialize the number of rows
    // initialize the number of columns (so that we can refer to edges)
    const numRows = grid.length
    const numCols = grid[0].length
    // We'll use a recursive function that will take a row and a column
    function checkIslandAndSink(row, col) {
        // The base case will be when the current space is water
        if (grid[row][col] === '0') {
            return 0
        }
        // Sink the island
        grid[row][col] = '0'
        // We use variables to define the 4 directions
        // UP
        let up
        // DOWN
        let down
        // LEFT
        let left
        // RIGHT
        let right
        
        // For the recursive cases,
        // We'll use 4 if statements, one for each direction
        // if the space UP is land
        // This basically checks if the space we want to go to is VALID, and then changes to that space
        if (row - 1 >= 0) {
            up = checkIslandAndSink(row - 1, col)
        } 
        // if the space DOWN is land
            // Go to that space (use the recursive function on that space)
        if (row + 1 < numRows) {
            down = checkIslandAndSink(row + 1, col)
        } 
        // if the space LEFT is land
            // Go to that space (use the recursive function on that space)
        if (col - 1 >= 0) {
            left = checkIslandAndSink(row, col - 1)
        } 
        // if the space RIGHT is land
            // Go to that space (use the recursive function on that space)
        if (col + 1 < numCols) {
            right = checkIslandAndSink(row, col + 1)
        } 
        // Return the fact that there is ONE island here
        return 1
    }
    
    // we'll start a for loop that will loop through rows
        // and inside we'll loop through col's
            // invoke the recursive function passing in the current space
    for (let row = 0; row < numRows; row++) {
        for (let col = 0; col < numCols; col++) {
            islandCount += checkIslandAndSink(row, col)
        }
    }
    return islandCount
};