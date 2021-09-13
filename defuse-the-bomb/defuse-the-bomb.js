/**
 * @param {number[]} code
 * @param {number} k
 * @return {number[]}
 */
var decrypt = function(code, k) {
    // I think I can approach this with a simple for loop and conditionals, at least to start for a brute force method
    // I need to use a new array for my answer since manipulating the given one with my current logic will skew the numbers afterwards
    
    // Initialize an answer array
    const ans = []
    // Initiate a for loop through code
    for (let i = 0; i < code.length; i++) {

        // If k is equal to 0
        if (k === 0) {
            // the current element in code will be reassigned to 0  
            ans[i] = 0
        }
        // else if k is greater than 0
        else if (k > 0) {
            // Initialize a variable "sum" to 0
            let sum = 0
            // Initialize a counter
            let count = 0
            // Initialize j as a copy of i + 1
            let j = i + 1
            // Start a while loop that adds the k number following digits into sum
            while (count < k) {
                // If the current index of this loop is .length/undefined, reassign to index 0       
                if (j >= code.length) {
                    j = 0
                } 
                sum += code[j]
                j++
                count++
            }
            // After this while loop, reassign the value at the current index of the code for loop to sum 
            ans[i] = sum
        }
    
        // else (if k is less than 0)
        else {
            // Initialize a variable "sum" to 0
            let sum = 0
            // Initialize a counter
            let count = 0
            // Initialize j as a copy of i - 1
            let j = i - 1
            // Start a while loop that adds the k number *previous* digits into sum
            while (count > k) {
                // If the current index of this loop is undefined, reassign to .length - 1   
                if (j < 0) {
                    j = code.length - 1
                }
                sum += code[j]
                j--
                count--
            }
            // After this loop, reassign the value at the current index of the code for loop to sum            
            ans[i] = sum
        }
    }
    return ans
};