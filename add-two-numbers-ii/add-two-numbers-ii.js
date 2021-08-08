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
    /*
    // I could use an answer list that will be returned at the end, and add to it it each pair of nodes (from the two given lists) as I iterate through both lists
    // However, we actually start from the 'end' of each list, given the examples...should I reorder them? 
    
    // Looking at Example 1, the heads of the list don't even start at the same node because the node lengths are different and aligned by tail, so I think it would be helpful to possibly get the lengths of each list first
    
    // Alternatively, I could get to the tail of each list (which I could detect because the next would point to null), add those values together, add them to the answer, then get to the new tail of each list, add those together and to the answer, and continue until we're back at the heads of each
    // Then I could reverse the answer list
    
    // declare a new ListNode representing the answer
    // declare an iterator for that answer list
    // declare an iterator for l1
    // declare an iterator for l2
    const ans = new ListNode()
    let prevAns = ans
    let prev1 = l1
    let prev2 = l2
    
    // Wrap these in a helper function because we'll need to call it multiple times
    // Until prev1's next doesn't point to null
        // Iterate prev1
    // Until prev2's next doesn't point to null
        // Iterate prev2
    function moveToEnd(prev1, prev2) {
        prev1 = l1
        prev2 = l2
        while (prev1.next) {
            prev1 = prev1.next            
        }
        while (prev2.next) {
            prev2 = prev2.next            
        }
    }
    moveToEnd(prev1, prev2)
    
    
    // Now that both iterators are at the ends of their lists, add their values together and assign the first node of the answer list to that sum
    // Move answer iterator down
    // Assign next value to null
    // call moveToEnd again
    // repeat this process 
    function add(prev1, prev2, prevAns) {
        prevAns.val = prev1.next.val + prev2.next.val
        prevAns = prevAns.next
        prev1.next = null
        prev2.next = null
        moveToEnd(prev1, prev2)
        add(prev1, prev2, prevAns)
    }
    add(prev1, prev2, prevAns)
    return ans.next
    // did not solve in 30
    */
    let s1 = []
    let s2 = []
    while (l1) {
        s1.push(l1.val)
        l1 = l1.next
    }
    while (l2) {
        s2.push(l2.val)
        l2 = l2.next
    }
    let list = new ListNode(0)
    while (s1.length || s2.length) {
        let sum = 0
        if (s1.length) sum += s1.pop()
        if (s2.length) sum += s2.pop()
        sum += list.val
        list.val = sum % 10
        let head = new ListNode(Math.floor(sum / 10))
        head.next = list
        list = head
    }
    return list.val === 0 ? list.next : list
};