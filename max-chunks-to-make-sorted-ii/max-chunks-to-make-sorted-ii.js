/**
 * @param {number[]} arr
 * @return {number}
 */
var maxChunksToSorted = function(arr) {
    // code adapted from a user-submitted solution
    const n = arr.length
    const minOfRight = new Array(n)
    minOfRight[n - 1] = arr[n - 1]
    for (let i = n - 2; i >= 0; i--) {
        minOfRight[i] = Math.min(minOfRight[i + 1], arr[i])
    }
    let res = 0
    let max = -Infinity
    for (let i = 0; i < n - 1; i++) {
        max = Math.max(max, arr[i])
        if (max <= minOfRight[i + 1]) {
            res++
        }
    }
    return res + 1
};

