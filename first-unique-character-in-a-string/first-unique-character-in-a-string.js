/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    // preprocessing: use a for loop to store the number of OCCURRENCES; key is the letter, value is # of occurrences
    // use a second concurrent for loop to iterate through the string again, checking the # of occurrences in the hash table and return the index of the first letter with a value 1
    
    // initialize a hash table to store the occurrences by letter
    const memo = {}
    // preprocess in a for loop, storing each letter and its occurrences in the table
    for (let i = 0; i < s.length; i++) {
        if (!memo[s[i]]) {
            memo[s[i]] = 1
        } else {
            memo[s[i]]++
        }
    }
    
    // use a second for loop to iterate through the string again
    for (let j = 0; j < s.length; j++) {
        // if the letter's occurrence is 1
        if (memo[s[j]] === 1) {
            // return current letter's index
            return j
        }
    }
    // after the loop and no unique characters are found, return -1
    return -1
};