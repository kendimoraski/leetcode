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
    // 1. initialize an answer node to store the distinct elements and ultimately be returned
    const ans = new ListNode()
    // 3. move the head's next to the holder
    // initialize an iterator for the nodes
    let prev = ans
    
    if (!head) return ans.next
    
    // 4. for the very first index, move the head to the answer's next
    prev.next = head
    // 5. move the holder's contents back to the head
    head = head.next
    
    while (head) {
     // 7. each time, compare the head's current value with the value of the node on ans.next
        if (head.val !== prev.next.val) {
    // 7a. if it's not the same, move it to the answer
            prev = prev.next
            prev.next = head
        }
    // 8. move the holder contents to the head again (to "override" any duplicates?)
        head = head.next
    // 9. repeat until the holder and head are empty
    }
    // make sure the end of prev gets cut off
    prev.next.next = null
    // 10. return answer node
    return ans.next
};