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
    // 1.  initialize a new head to contain the non-`val` values and ultimately be returned
    const ans = new ListNode()
    // initialize a new iterator variable
    let prev = ans
    // 3. compare the head's val with the target val
    while (head) {
        // 4. if it doesn't match, add it to the new head
        if (head.val !== val) {
            prev.next = head 
            prev = prev.next  
        }
        head = head.next
    }
    // after we exit the while loop, we want to make the end of prev null
    prev.next = null
    // 5. repeat 3-4a until holder and head are empty
    // 6. return the new head
    return ans.next
};