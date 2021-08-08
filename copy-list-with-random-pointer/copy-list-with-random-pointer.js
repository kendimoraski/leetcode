/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function(head) {
    /*
    // I'm thinking we could use a dummy head to copy each node in order, simultaneously copying both its next pointer and its random pointer
    // We would need a `prev` iterator to use on the original given `head` LL
    // We could move down the dummy by using dummy's own next pointer, constructing more of it as we go
    
    // edge case
    if (!head || !head.next) return head
    // initialize a brand new dummy list
    let dummy = new Node(0, 0, 0)
    // initialize a `prev` iterator set to the head
    let prev = head
    // Use a while loop that ends when prev is null
    while (prev) {
        // make a copy of the node
        let copy = new Node(prev.val)
        copy.next = prev.next
        copy.random = prev.random
        // set the dummy's next to the value in the head
        dummy.next = prev
        // // set its next to the next value in the head
        // dummy.next.next = prev.next
        // // set is random to the random value in the head
        // dummy.next.random = prev.random
        // iterate prev only in the NEXT order (which would be in sequential order)
        prev = prev.next
        console.log(dummy.next)
    }
    // return dummy head's next
    return dummy.next
    // Could not finish in 30
    */
    // Solution found on ProgramCreek.com
    if (!head) return null
    let p = head
    // We use this while loop to copy each node and LITERALLY INSERT it into the list
    while (p) {
        let copy = new Node(p.val)
        copy.next = p.next
        p.next = copy
        p = copy.next
    }
    // Then we take care of copying the random pointer for each node
    // Reset p to the head
    p = head
    while (p) {
        if (p.random) {
            p.next.random = p.random.next
        }
        p = p.next.next
    }
    // Since the modified list is now double in length (including all the copies) we break it in two and return a new entire list with half of them
    p = head
    let newHead = head.next
    while (p) {
        let temp = p.next
        p.next = temp.next
        if (temp.next) {
            temp.next = temp.next.next
        }
        // iterate down
        p = p.next
    }
    return newHead
};