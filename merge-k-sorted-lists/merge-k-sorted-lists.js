/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    // Push the values from the `lists` array into a flat array
    // sort this flat array
    // turn this array into a linked list to return
    
    // declare a flat array to push into
    const flat = []
    // Use a nested for loop to push each value of lists
    for (let i = 0; i < lists.length; i++) {
        // declare an iterator for the individual lists
        for (let prev = lists[i]; prev !== null; prev = prev.next) {
            // Push into flat array            
            flat.push(prev.val)
        }
    }
    // Sort the flat array
    flat.sort((a, b) => a - b)
    // Use the ListNode class to convert this flat array into a linked list
        // This will require another for loop

    let prev = new ListNode(null)
    let newHead = prev
    for (let i = 0; i < flat.length; i++) {
        // this is the new head
       prev.next = new ListNode(flat[i])
       prev = prev.next
    }
    return newHead.next
};