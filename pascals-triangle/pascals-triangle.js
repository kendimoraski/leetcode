/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    
    const ans = []

    for (let row = 0; row < numRows; row++) {
        const inner = []
        // the sum of an index is always equal the sum of the previous element's number at the same index + the index before
        for (let j = 0; j < row + 1; j++) {
            if (j === 0 || j === row) {
                inner.push(1)
            } else {
                let val1 = ans[row - 1][j - 1] 
                let val2 = ans[row - 1][j]
                inner.push(val1 + val2)
            }
        }
        ans.push(inner)
    }
    return ans
}

// index 1 equals index 0 + 1
// index 1 equals index 0 + 1
// index 2 equals index 1 + 2
// index 1 equals index 0 + 1
// index 2 equals index 1 + 2
// index 3 equals index 2 + 3