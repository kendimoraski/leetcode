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
var reverseList = function(head) {
    /*
    // start at the beginning
    // keep track of 3 things in 3 pointers:
        // answer node (what i will return)
        // the value i'm going to remove
        // most importantly, the value after the node you're removing
    
    // 1. initialize an answer node that will be empty at the beginning
    const ans = new ListNode()    
    // edge case
    if (!head) return ans.next
    // 2. save the node after the node I'm removing (assign it to a variable)
    let after = head.next
    // 3. take the first node i'm removing and attach it to the answer node
    ans.next = head
    // 4a. for the very first node, "disconnect" the next value from this node I just moved and make it equal to null
    head.next = null
    // 4b. for every node thereafter, the next value will be the the node that was moved before it within the answer node
    // iterate
    while (after) {
        // reassign the head to contain what was in after
        head = after
        // save the node after the node I'm removing
        after = head.next
        // take the node on answer and attach it to the current head
        head.next = ans.next
        // take that whole head, and move it back to ans
        ans.next = head
        // repeat from the top of the while loop
    }
    // 5. return the answer node's next value (these are the actual values)
    return ans.next
    */
    
    // Recursive solution
    if (!head || !head.next) return head
    const p = reverseList(head.next)
    // This gets the node after the current node to POINT TO the current node
    head.next.next = head
    // The head needs to ultimately point to null (in this case, the first value 1)
    head.next = null
    // Make the recursive call
    return p
};