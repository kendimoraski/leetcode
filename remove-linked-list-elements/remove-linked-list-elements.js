/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    
    if (!head) return head
    
    // for the case where we start with the val
    while (head && head.val === val) {
        head = head.next
    }
    
    // initialize a new iterator variable
    let prev = head
    // initialize a variable to eventually hold onto the next values so they don't get lost when we dispose of a node
    let next
    
    // while `prev` exists
    while (prev) {    
        // compare the head (prev)'s value with the argument `val`
        if (prev.next && prev.next.val === val) {
            // store the next node and beyond into `next`
            next = prev.next
            // take care of the situation where there are unknown amount of val integers
            while (next && next.val === val) {
                next = next.next
            }
            prev.next = next
        }
        // move prev
        prev = prev.next
    }
    // return the newly rearranged head
    return head
};