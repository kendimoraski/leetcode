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
var swapPairs = function(head) {
    // We need to keep track of every other node and isolate it from both the node that comes before, and the node that comes after
    // We can use extra lists/"hooks" to do this
    // By rearranging the order of every other node, utilizing these extra lists/hooks, we can continue moving the pointer by TWO nodes every iteration until it reaches the tail
    
    /*
    // edge cases
    if (head === null || head.next === null) {
        return head
    }
    
    // make an `ans` variable whose .next will be ultimately be returned
    const ans = new ListNode()
    // initialize an iterator for the original `head` called `prev`
    let prev1 = head
    // initialize another iterator for the `ans`
    let prev2 
    
    // while there are nodes left to iterate with `prev`
        // move the current node's `.next` to the answer list(?)
        // iterate down the answer
        // move THAT node's .next back to the original head
        // iterate down answer twice
        // move current node to prev(?) [basically the extra hook]
    // return ans
    while (prev1) {
        ans.next = prev1.next
        prev2 = ans.next.next
        prev1.next = prev2.next
        prev2 = prev2.next.next
        prev1.next.next = prev2
    }
    return ans.next
    // 30 min couldn't finish
    */
    
    // Translated Java solution from Discuss
    // edge cases where we simply return the head as is
    if (head === null || head.next === null) {
        return head
    }
    // we make a new individual node of just the first value
    let temp = new ListNode(head.val)
    // then we make a new individual node of just the second value
    let temp2 = new ListNode(head.next.val)
    // move the first individual node to be after the second original node (connect them using .next)
    temp2.next = temp
    // then the THIRD value (the .next.next) will be the result of repeating the above (recurisvely) on the value 2 nodes down from the original head
    temp2.next.next = swapPairs(head.next.next)
    // returning temp2 here is reminiscent of returning ans.next (when ans is a copy of head) in previous problems
    return temp2
};