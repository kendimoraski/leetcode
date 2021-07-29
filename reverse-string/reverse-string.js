/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */

var reverseString = function(s) {
    // two pointers (iterative)
    /*
    let left = 0
    let right = s.length - 1
    let temp = ''
    while (left <= right) {
        temp = s[left]
        s[left] = s[right]
        s[right] = temp
        left++
        right--
    }
    */
    // recursive
    var helper = function(left, right) {
        // base case
        if (left < right) {
            let temp = s[left]
            s[left++] = s[right]
            s[right--] = temp
            helper(left, right)
        }
    }
    helper(0, s.length - 1)
}