/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    // loop through str
    // store letters in a given string as the "key" of the table (which would be an alphabetically sorted str)
    // when I get to the next string, check if that combination of letters already exists in hash
    // the values will be an array of the actual strings
    // matching combo's, output original strings into subarrays that get returned within an answer array
    
    // initialize table to store each string in `str`
    const hash = {}
    // create loop to process every element of `strs`
    for (let i = 0; i < strs.length; i++) {
        // if the table does not already contain the element (in the format below)
        const combo = strs[i].split('').sort().join('')
        // add it to the table with the key being the string converted to an array, sorted alphabetically, then sorted back to a string; the value will be an array with `str[i]`
        // if it does contain the letter combo, push to the corresponding value array in the table 
        if (!hash[combo]) {
            hash[combo] = []
        }
        hash[combo].push(strs[i])
    }
    // return the table
    return Object.values(hash)
};