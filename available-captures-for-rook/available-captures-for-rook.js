/**
 * @param {character[][]} board
 * @return {number}
 */
var numRookCaptures = function(board) {
    // loop through the board by space (row and col)
    for (let row = 0; row < 8; row++) {
        for (let col = 0; col < 8; col++) {
            // if space contains a rook...
            if (board[row][col] === "R") {
                // count the pawns based on that row/col
                return countPawns(row, col);
            }
        }
    }
    // don't use arrow functions so these functions can be called before they're declared(?)
    function countPawns(x, y) {
        let count = 0
        // directions(?)
        const dirs = [-1, 0, 1, 0, -1]
        
        for (let i = 0; i < dirs.length - 1; i++) {
            const dirX = dirs[i]
            const dirY = dirs[i + 1]
            count += findPawn(x + dirX, y + dirY, dirX, dirY)
        }
        return count
    }
    
    function findPawn(x, y, dirX, dirY) {
        if (isValid(x, y)) {
            if (board[x][y] == 'p') return 1;
            x += dirX
            y += dirY
            return findPawn(x, y, dirX, dirY);
        }
        return 0;
    }
    
    // isValid confirms if x and y are on the board and the space is not a bishop
    function isValid(x, y) {
        return x >= 0 && y >= 0 && x < 8 && y < 8 && board[x][y] != 'B'
    }
};