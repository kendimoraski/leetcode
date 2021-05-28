/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    // traverse the list with your first iterator adding to an external counter each time
    // when that counter = n
    // start simultaneously traversing a delayed iterator
    // move both at the same time
    // when first iterator reaches the end of the linked list (meaning its next is null)
    // that's when you know the next of the delayed iterator needs to be removed
    // change the next the delayed iterator next.next
    
    // edge case
    if (!head) return head
    
    // initialize first iterator
    let prev = head
    // initialize delayed iterator
    let delayedPrev = head
    // create a FOR loop that loops `n` times
    for (let i = 0; i < n; i++) {
        // move iterator down `head`
        prev = prev.next
    }
    
    if (!prev) return head.next
    
    // create a WHILE loop that will end when first iterator's next is `null`
    while (prev.next) {
            // move first iterator down `head`
            prev = prev.next
            // move second iterator down `head`
            delayedPrev = delayedPrev.next
    }
 
    // reassign delayed iterator's next to next.next
    delayedPrev.next = delayedPrev.next.next
    // return head
    return head
};