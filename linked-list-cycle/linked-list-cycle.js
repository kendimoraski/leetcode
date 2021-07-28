/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */

var hasCycle = function(head) {
    let slowPointer = head
    let fastPointer = head
    while (fastPointer) {
        if (fastPointer.next === null) return false 
        slowPointer = slowPointer.next
        fastPointer = fastPointer.next.next
        if (fastPointer === slowPointer) {
            // there is a cycle
            return true
        }
    }
    return false
};