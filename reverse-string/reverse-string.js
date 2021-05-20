/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    let n = 1
    for (let i = 0; i < s.length / 2; i++) {
        let temp = s[s.length - n]
        s[s.length - n] = s[i]
        s[i] = temp
        n++
    }
    // console.log(s)
}; // Time O(n) where n is the length of s / 2, Space O(1)
// if we didn't need to keep track of every letter in s, we would want to try to optimize this to O(log n) by getting rid of some amount of letters each time inside of a while loop