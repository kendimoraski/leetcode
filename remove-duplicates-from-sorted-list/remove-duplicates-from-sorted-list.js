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
var deleteDuplicates = function(head) {

    // initialize an iterator for the nodes
    let prev = head
    // initialize a variable to hold the next value
    let next
    
    if (!head) return head
    
    // while prev exists
    while (prev) {
     // each time, compare the current value with its next value
     // if they are the same,
        if (prev.next && prev.val === prev.next.val) {
            // move the next value and beyond to the `next` storage variable (or somewhere else?) and then move that variable's `.next` back to `prev`'s `.next`
            next = prev.next
            while (next && next.val === prev.val) { 
                next = next.next
            }
            prev.next = next
        }
        // move the holder contents to the head again (to "override" any duplicates?)
        prev = prev.next
    }

    // return the newly edited head
    return head
};