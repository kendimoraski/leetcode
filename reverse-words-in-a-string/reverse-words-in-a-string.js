/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    // the key point here is that the spaces might be longer length of 1; I will try to .split(), but if there exist extra spaces,
    // it would be wise to filter out extra spaces first, then join at the end with a single space placed in between again
    // if I separate these strings into arrays of distinct strings, I could use two pointers (left and right) to start on the 
    // outer edges of the array, swap their indexes, move one index inwards on both ends, and repeat until the pointers pass
    
    // split the string based on space into an array of individual words
    const arr = s.split(' ').filter(x => x !== '')
    // initialize left pointer
    let left = 0
    // initialize right pointer
    let right = arr.length
    // initialize a temp variable for temporary storage
    let temp
    // create a loop that will end when the pointers pass each other
    while (left <= right) {
        // for each element at the left pointer, swap its index with the element at the right index
        temp = arr[left]
        arr[left] = arr[right]
        arr[right] = temp
        // increment left pointer
        left++
        // decrement right pointer
        right--
    }
    // return array joined together by a single space
    return arr.join(' ').slice(1)
};