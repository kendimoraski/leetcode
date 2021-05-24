/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    // My first thought is to use an array method/method chaining like .filter, .map, .reduce or some combination thereof in order to loop through the array and output new values tha are products of the other elements except the one at index i
    // I could also just accomplish this with a nested for loop so I will go that route for simplicity's sake to start
    // the outer for loop will loop through the current elements of nums
    // the inner for loop will be used to multiply together the other elements except for the element at index i
    
    // initialize an output array to push the products into
    const output = []
    // initialize a product
    let product = 1
    // create a for loop to loop through the elements of nums one at a time
    for (let i = 0; i < nums.length; i++) {
        // at each element, create another for loop to loop through all of the OTHER elements in nums
        for (let j = 0; j < nums.length; j++) {
            // if nums[j] is NOT the same as nums[i]
            if (j !== i) {
                // for each of these elements, multiply them together
                product *= nums[j]
            }
        }
        // push the total product into the output array; this will be done in order since the outer for loop is in order
        output.push(product)
        // after each push to output, reset product back to 1
        product = 1
    // after the outer for loop finishes, return the output array
    }
    return output
};