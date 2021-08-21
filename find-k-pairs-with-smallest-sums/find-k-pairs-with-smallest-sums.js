/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[][]}
 */
var kSmallestPairs = function(nums1, nums2, k) {
    /*
    // We want to try to mimic a heap for this problem if possible, specifically a *min* heap because we are concerned with returning the smallest sums
    // We can build the heap from the list (this will take O(n) time)
    // In JS we don't have built-in heaps, and I'm not going to implement a heap class/function/data structure at this time, so we will use arrays
    // We're already given arrays nums1 and nums2, so we can build our min heap to be an array of the sums (or pairs that yield the sums)
    // If we follow the correct pattern of implementation for the indices, we should simply be able to return up to the k-th element in the heap
    
    // Initialize a min heap to add to and ultimately return a k-th portion of
    const minHeap = []    
    
    // Since both nums1 and nums2 are sorted in ascending order, we know that we can use the smaller of the two 0-indexed numbers in all our pairs to start

    // Initialize a pointer1 and a pointer2 for each array
    let pointer1 = 0
    let pointer2 = 0
    // Add to the min heap the values at [pointer1, pointer2] in that format
    minHeap.push([nums1[pointer1], nums2[pointer2]])
    // While the length of min heap is not k
    while (minHeap.length < k) {
        // If the number at pointer1 + 1 is less than the number at pointer2 + 1
        if (pointer1 + 1 < nums1.length && pointer2 + 1 < nums2.length) {
            if (nums1[pointer1 + 1] <= nums2[pointer2 + 1]) {
                // Increment pointer1 
                pointer1++
            // else             
            } else {
                // Increment pointer2          
                pointer2++
            }
        } else if (pointer1 + 1 < nums1.length && pointer2 + 1 === nums2.length) {
            pointer1++
        } else if (pointer1 + 1 === nums1.length && pointer2 + 1 < nums2.length) {
            pointer2++
        } else {
            break
        }
        // Add to min heap [nums2[pointer1], nums2[pointer2]]
        minHeap.push([nums1[pointer1], nums2[pointer2]])
    }    
    // return the heap
    return minHeap
    
    // Unable to mimic a heap in this way in the time limit
    */
    
    // Non-heap approach from a user-submitted solution
    // Edge cases (empty as input) 
    if (!nums1.length || !nums2.length) return []
    // Initialize an array that will hold objects
    const arr = []
    // Initialize a variable to hold the largest sum inside the array we just created at any given time
    let max = -Infinity
    
    // Loop through both integer arrays in a nested loop
    for (let i = 0; i < nums1.length; i++) {
        for (let j = 0; j < nums2.length; j++) {
            // We create an object using the current indices of both arrays; this will obviously change with the indices
            const obj = {
                // The sum property will hold the sum of the numbers at the current indices in nums1 and nums2
                sum: nums1[i] + nums2[j],
                // nums will be what gets output to our answer array (after converted from an array of objects at the end)
                nums: [nums1[i], nums2[j]]
            }
        
            // Our 4 scenarios:
            if (obj.sum >= max && arr.length >= k) {
                break
            } else if (obj.sum <= max && arr.length < k) {
                arr.push(obj)
            } else if (obj.sum > max && arr.length < k) {
                max = obj.sum
                arr.push(obj)
            } else if (obj.sum < max && arr.length >= k) {
                let newMax = -Infinity
                let replaced = false
                
                for (let n = 0; n < arr.length; n++) {
                    if (!replaced && arr[n].sum === max) {
                        arr[n] = obj
                        replaced = true
                    }
                    if (arr[n].sum > newMax) newMax = arr[n].sum
                }
                max = newMax
            }
        }
    }
    return arr.map(obj => obj.nums)
};