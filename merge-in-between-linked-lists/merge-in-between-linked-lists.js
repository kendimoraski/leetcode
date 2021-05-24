/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {number} a
 * @param {number} b
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeInBetween = function(list1, a, b, list2) {
    // LOGIC
    // attach b.next to the bottom of list2
    // I can then attach list2 at the node before a, overriding the part of list1 to be removed
    // Q: do I always need an answer? The answer is no!
    
    // PSEUDO CODE

    // initialize a var to iterate through list1 and a second iterator for list2
    let prev1 = list1
    let prev2 = list2
    // iterate through list1 until b+1.next
    // we know we only need to go ath times so we use a for loop
    for (let i = 0; i < b + 1; i++) {
        // move the iterator
        prev1 = prev1.next   
    }

    // iterate through list2 to actually get to the bottom of list2
    while (prev2.next) {
        prev2 = prev2.next
    }
    // attach b.next to the last node's next of list2
    prev2.next = prev1
    
    // move prev1 back to the start of list1
    prev1 = list1
    
    // iterate again through list1 until a - 1
    for (let i = 0; i < a - 1; i++) {
        prev1 = prev1.next
    }
    
    // attach list2 to a-1's next
    prev1.next = list2
    
    // return list1
    return list1
    
};