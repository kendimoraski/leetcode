/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    // I think for this problem it makes sense to use a Map
    // We can store characters and it will remember our order of insertion, which we could compare against the other string
    
    // Initialize two Maps to store characters
    const sMap = new Map()
    const tMap = new Map()
    
    // Initialize two strings to add to and ultimately compare
    let newS = ''
    let newT = ''
    
    // Loop through the s string  and add to its Map
    for (let i = 0; i < s.length; i++) {
        sMap.set(s[i], i)
        tMap.set(t[i], i)
    }
    // Add to their respective strings based on the now stored values in the map
    for (const [key, value] of sMap) {
        newS += value
    }
    for (const [key, value] of tMap) {
        newT += value
    }
    // Compare the two
    return newS === newT
};