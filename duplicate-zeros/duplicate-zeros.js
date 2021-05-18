/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
var duplicateZeros = function(arr) {
    let possibleDups = 0;
    let length = arr.length - 1
    // find number of zeros to be duplicated
    // stop when left points beyond the last element in the original array which would be part of the modified array
    for (let left = 0; left <= length - possibleDups; left++) {
        if (arr[left] === 0) {
            // edge case: zero can't be duplicated b/c we have no more space in the area where the left is pointing to the last element that could be included
            if (left === length - possibleDups) {
                // copy without duplication
                arr[length] = 0;
                length -= 1;
                break;
            }
            possibleDups++
        }
    }
    // start backwards from the last element of the new array
    let last = length - possibleDups
    // copy zero twice and non zero once
    for (let j = last; j >= 0; j--) {
        if (arr[j] === 0) {
            arr[j + possibleDups] = 0;
            possibleDups--;
            arr[j + possibleDups] = 0;
        } else {
            arr[j + possibleDups] = arr[j]
        }
    }
};