/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {

    // 2. initialize an answer node to add to and ultimately return
    const ans = new ListNode()
    // use prev as a copy to hold onto the ans values for iterating; this is not a hook, this is a node
    let prev = ans
    
    // 2a. check if there are even contents to l1 and/or l2
    // 2aa. if there are no values in either, return ans.next
    if (!l1 && !l2) return ans.next
    // 2ab. if there are values in just one, just return that list
    if (!l1 && l2) return l2
    if (!l2 && l1) return l1
    
    // check the current nodes
    while (l1 && l2) {
        // 4. each time, compare l1 and l2's values
        if (l1.val <= l2.val) {
            // 5. move the lesser value to the answer
            prev.next = l1        
            // 6. when l1 or l2 hook is empty, move its (after) extra contents back
            l1 = l1.next
        } else {
            prev.next = l2
            l2 = l2.next
        }
        // iterate everything using prev
        prev = prev.next
    }
    
     // 6a. if one of the lists no longer has any extra content but the other still does, stop what you're doing and just attach the rest of the remaining content to the end of the answer
    if (!l1) {
        prev.next = l2
    }
    if (!l2) {
        prev.next = l1
    }
    
    // 8. return merged list
    return ans.next
};