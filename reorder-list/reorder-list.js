/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
    // We essentially want the first node's next to point to the tail, and then moving inwards have successive nodes' next pointers pointing to the node before the tail, etc
    // Since we cannot directly modify values, I think it makes sense to make copies of the tail nodes (we could use a stack!) and then 'insert' those nodes in between the other nodes
    // When we reach the end of the linked list during node insertion, we need to make sure that the correct new tail node's next points to null
    
    // initialize a stack
    const stack = []
    // initialize an iterator for filling the stack
    let prev = head
    // track the stack length
    let l = 0
    // Use a while loop to fill the stack
    while (prev) {
        l++
        stack.push(prev.val)
        prev = prev.next
    }
    // When the loop is over, we can reset the iterator back to the original head
    prev = head
    // New loop
    while (stack.length > Math.ceil(l / 2)) {
        // create a new node created from the last value in the stack
        let newNode = new ListNode(stack.pop())
        // pop off another of the stack and forget about it
        // stack.pop()
        // The new node's next will point to the current node's next
        newNode.next = prev.next
        // The current node's next will point to this new node; this should essentially skip over what was the next node in the original head
        prev.next = newNode
        // Move the iterator down 2 nodes at a time
        prev = prev.next.next
        // We do this until prev is at the end of the list again
        // Make the last time point to null
        if (l % 2 === 0 && stack.length === Math.ceil(l / 2)) {
            newNode.next = null
        }
        if (l % 2 === 1 && stack.length === Math.ceil(l/2)) {
            newNode.next.next = null
        }
    }
    // return head
    return head
};