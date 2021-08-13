/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function(words, k) {
    // use memoization to keep track of the words in `words` and the frequency
    // when the whole `words` array has been checked, use a while loop...
    // in which, until a counter reaches k, we push the highest frequency words into an output array to return
    // sort the output array if necessary
    
    
    
    // initialize an output array to return
//     const output = []
//     // initialize a memo hash table object
//     const memo = {}
//     // loop through ALL elements of words
//     for (let i = 0; i < words.length; i++) {
//         // for each element, add to memo table where the property is the element string and the frequency is a counter integer
//         memo[words[i]] = memo[words[i]] ? memo[words[i]] + 1 : 1
//     }

//     // initialize a counter for the while loop iterations
//     let counter = 0
//     // initialize an array that is assigned to Object.values of the memo
//     const values = Object.values(memo)
//     const keys = Object.keys(memo)
//     let max
//     // while the counter is less than k
//     while (counter < k) {
//         // initialize a max variable which would be assigned to Math.max on the spread array
//         max = Math.max(...values)
//         // push to the output array the property (string) associated with that max value
//         output.push()
//         // sPlice the array to be spread again so it no longer contains the previous max value
//         values.splice(values.indexOf(max), 1)
//         // increment counter
//         counter++
//     }
//     // return output array
//     return output
// };


    const mappings = {}
    for (let i = 0; i < words.length; i++) {
        mappings[words[i]] = mappings[words[i]] + 1 || 1
    }
    const sorted = Object.keys(mappings).sort((a, b) => { 
        // if the frequency is equal...
        if (mappings[b] === mappings[a]) { 
            // alphabetize
            return a > b ? 1 : -1 
        }
        // meaning sort in descending order
        return mappings[b] - mappings[a]
    })
    return sorted.slice(0, k)
};