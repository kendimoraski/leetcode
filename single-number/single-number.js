/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    // LOGIC
    // if I were to loop through the `nums` array, I could keep track of the current number, and then search the rest of the array to see if the second instance of that number exists
    // the one integer that does not have a second instance, will be returned
    // try to avoid using a hash table or another non-constant storage object
    
    // // PSEUDOCODE
    // // initialize a variable representing the single number
    // let singleNumber = 0
    // // initiate the loop to go through the array `nums`; can this be a while loop too?
    // for (let i = 0; i < nums.length; i++) {
    //     // at the index FOLLOWING each current integer, start another loop
    //     // this could(?) be a while loop because we don't know how many we have to check
    //     for (let j = i + 1; j < nums.length; j++) {
    //          // this nested loop will then check to see if any of the remaining integers are the same
    //         if (nums[j] === nums[i]) {
    //             // as soon as a second instance is found, stop this loop
    //             break
    //         } 
    //     }
    //     // if we reach the end of any of the nested iterations and there is no double, return the current integer
    // singleNumber = nums[i]
    // }
    // return singleNumber

    const memo = {}
    
    for (let i = 0; i < nums.length; i++) {
        if (!memo[nums[i]]) {
            memo[nums[i]] = 1
        } else {
            memo[nums[i]]++
        }     
    }
    console.log(memo)
    for (let i = 0; i < nums.length; i++) {
        if (memo[nums[i]] === 1) {
            return nums[i]
        }
    }
    // return 0
};