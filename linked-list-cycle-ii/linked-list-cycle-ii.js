/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
    // We're going to use a slow and fast pointer
    // We use a while loop that will be based on whether fast and its next pointer are not (pointing to) null
    // To start we increment move the slow pointer only by 1 node (hence "slow") and fast by 2 (hence "fast") 
    // If the slow and fast pointers are at the same node, we move the slow back to the start in order to have them in separate locations
    // While they are now no longer the same, we move each pointer again by only 1 each 
    // This means that when they are the same node again, we have found the start of our cycle at `slow` 
    
    // Initialize the fast and slow pointers
    let fast = head
    let slow = fast
    // While fast and its next pointer are not (pointing to) null
    while (fast && fast.next) {
        // increment the pointers  appropriate to their name
        slow = slow.next
        fast = fast.next.next
        // If slow and fast are at the same node
        if (slow === fast) {
            // Move slow back to the start so they're separate
            slow = head
            // While they are no longer the same {
            while (slow !== fast) {
            // Now only increment by 1 each until they meet again
            slow = slow.next
            fast = fast.next
            }
            return slow
        }
    }
    return null
};