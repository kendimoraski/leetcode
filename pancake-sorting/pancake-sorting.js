/**
 * @param {number[]} arr
 * @return {number[]}
 */
var pancakeSort = function(arr) {
    // LOGIC
    // this is bubblesort's logic (take the highest, bubble it to the end, then dont worry about it)
    // I could approach this by setting the goal of trying to get the highest value in `arr` to the end of the array first
    // each time I get the highest value to the end of `arr`, sorted from least to greatest...
    // ...I can therefore make the sub-array that I am reversing shorter and shorter ideally each time
    // ...because the sub-array that gets reversed must include index 0 no matter what
    
    // PSEUDO CODE
    // initialize an array to push the subarray lengths
//     const flips = []
//     // initialize a variable to store the greatest integer and another to store its index
//     let greatest = 0
//     let indexOfGreatest = 0
//     // loop through the array argument
//     for (let i = 0; i < arr.length; i++) {
//         // > identify the greatest integer in the array
//         if (arr[i] > greatest) {
//             greatest = arr[i]
//             indexOfGreatest = i
//         }   
//     }

//     while (indexOfGreatest < arr.length - 1) {
//         // move the greatest integer first to the front of the list...
//         // ...to the end of the array; do this until it is really at the very end of the array
//         // using .reverse on the subarrays prior to the greatest integer...  
//         arr.reverse()
//         indexOfGreatest = arr.indexOf(greatest)
//         // remember to keep track of the subarrays' lengths for each reversal:
//             // push these subarray lengths into the output array each time
//         // flips.push(sub.length)
//         console.log(indexOfGreatest)
//     }
//     // then I can decrease the sub-array's length (meaning not include the greatest integer at the end)
//     // > repeat the same steps on this shorter length'd array
//     // repeat until the array at large is completely sorted in ascending order
//     // return output
//     return flips
    
    // *** translation/mixture of the Java & Python solution*** //
    // sort like bubble-sort i.e. sink the largest number to the bottom at each round
    function flip(sublist, k) {
        let i = 0
        while (i < k / 2) {
            let temp = sublist[i]
            sublist[i] = sublist[k - i - 1]
            sublist[k - i - 1] = temp
            i += 1
        }
    }
    
    const ans = []
    let valueToSort = arr.length
    while (valueToSort > 0) {
        // locate the position for the value to sort in this round
        let index = arr.indexOf(valueToSort)
        
        // sink the value to the bottom,
        // with at most two steps of pancake flipping.
        if (index !== valueToSort - 1) {
            // 1). flip the value to the head if necessary
            if (index !== 0) {
                ans.push(index + 1)
                flip(arr, index + 1)
            }
            // now that the value is at the head, flip it to the bottom
            ans.push(valueToSort)
            flip(arr, valueToSort)
        }
        // move on to the next round
        valueToSort -= 1
    }
    return ans
};