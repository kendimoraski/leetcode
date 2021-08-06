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
var addTwoNumbers = function(l1, l2) {
    // iterate through l1 and l2 separately but simultaneously
    // for each node, add the nodes' values together and assign their sum to the value of a node on a new list
    // if the sum is greater than 9, subtract 10 from the sum before assigning to the new node
    // store the 1 in an external carry variable which is added on top of the sum of the next nodes
    // add carry every time
    
    // initialize an answer list
    const ans = new ListNode()
    // initialize an iterator for l1
    let prev1 = l1
    // initialize an iterator for l2
    let prev2 = l2
    // initialize an iterator for ans
    let prev3 = ans
    // initialize a carry variable
    let carry = 0
    
    // create a loop that goes until one or more lists don't have further values to traverse to
    while (prev1 && prev2) {
        // initialize current nodes' sum as a variable set to prev1.val + prev2.val + carry
        let sum = prev1.val + prev2.val + carry
        
        // set carry back to 0 because it was used above
        carry = 0
        // if the sum > 9, carry becomes 1, and subtract 10 from the sum
        if (sum > 9) {
            carry = 1
            sum -= 10
        }
        // set ans' value equal to the sum
        prev3.next = new ListNode(sum)
        
        // move prev1, prev2 and prev3 down
        prev1 = prev1.next
        prev2 = prev2.next
        prev3 = prev3.next
        console.log(ans)
    }
    // check which list still has next values if either
    let remaining = prev1 ? prev1 : prev2
    // create a new while loop to complete that list
    while (remaining) {
        // initialize current nodes' *sum* as a variable set to the value of whichever prev still exists + carry
        let sum = remaining.val + carry
        // set carry back to 0 because it was used above
        carry = 0
        // if the sum > 9, carry becomes 1, and subtract 10 from the sum
        if (sum > 9) {
            carry = 1
            sum -= 10
        }
        // initialize a new linked list node on the answer and set that node's val equal to the sum
        prev3.next = new ListNode(sum)
        // move the single prev down
        remaining = remaining.next
        prev3 = prev3.next
    }
    // check if carry exists, if so make that the final new linked list node
    if (carry) {
        prev3.next = new ListNode(carry)
    }
    // return the answer list
    return ans.next
};