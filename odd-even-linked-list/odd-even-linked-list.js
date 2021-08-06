/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var oddEvenList = function(head) {
    // We're not concerned with the VALUES of the nodes, but their INDEXES within the original list
    // Can we use Multiple Pass here to first include the odd indexes and add them in order to an answer list to return
    // Then pass a second time including the even indexes
    
    // Initialize a NEW answer list to add to and return
    // Initialize an odd iterator
    // Initialize an even iterator
    // For our first while loop, it will traverse the whole linked list
        // Starting with the first index, add it to the answer
        // iterate by 2 nodes
    // Use the second loop for the even indexes; this will also end at the end of the list
        // Start at the second node
        // Add it to the list
        // Iterate by 2 nodes 
    // Return the answer list

    // Short circuit (the edge cases)
    if (!head || !head.next) return head
    // Multiple pointers from Juan 
    let oddHead = head
    let oddPrev = head
    let evenHead = null
    let evenPrev = null
    let current = head
    // the point of the counter is to check whether the "indices" are even or odd
    let counter = 1
    while (current) {
        const isEven = counter % 2 === 0
        if (!evenHead && isEven) {
            evenHead = current
            evenPrev = evenHead
        } else if (isEven && evenPrev) {
            evenPrev.next = current
            evenPrev = current
        } else if (!isEven && oddPrev && counter !== 1) {
            oddPrev.next = current
            oddPrev = current
        }
        current = current.next
        ++counter
    }
    evenPrev.next = null
    oddPrev.next = evenHead
    return oddHead
};