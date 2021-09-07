/**
 * @param {number[][]} dominoes
 * @return {number}
 */
var numEquivDominoPairs = function(dominoes) {
    // Ex:
    // Input: [[9, 9], [0, 0], [8, 0], [8, 9]]
    // Output: 0
    // The instructions quite easily lay out the structure for doing this in O(n^2) time, in which we can use a for loop to check `i` and a nested for loop to check pair `j`. If the conditions are met, we can use an external counter to tally up the number of equivalent pairs. It's important that we "start" the j loop/pointer after i, so that duplicates are not counted.
    
    // Initialize counter
    let count = 0
    // Start first for loop to loop through dominoes[i]
    for (let i = 0; i < dominoes.length; i++) {
        // Start second for loop one *after* i, using dominoes[j] to represent the potential pair        
        for (let j = i + 1; j < dominoes.length; j++) {
            // If the first indices of i and j match *and* the second indices of i and j match *OR* the first index of i matches with the second index of j *and* the second index of i matches with the first index of j
            if ((dominoes[i][0] === dominoes[j][0] && dominoes[i][1] === dominoes[j][1]) || (dominoes[i][0] === dominoes[j][1] && dominoes[i][1] === dominoes[j][0])) {
                // We have a matching pair, so add to our counter       
                count++
            }
        }
    }       
    // return the counter
    return count
};