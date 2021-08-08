/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    // Make arrays for each linked list
    const headAArray = []
    let tempA = headA
    while (tempA) {
        headAArray.push(tempA.val)
        tempA = tempA.next
    }
    const headBArray = []
    let tempB = headB
    while (tempB) {
        headBArray.push(tempB.val)
        tempB = tempB.next
    }
    // Reassign the temp values to the LLs themselves
    tempA = headA
    tempB = headB
    if (headAArray.length > headBArray.length) {
        for (let i = 0; i < headAArray.length - headBArray.length; i++) {
            tempA = tempA.next
        }
        while (tempA && tempB) {
            if (tempA === tempB) {
                    return tempA
            } else {
                    tempA = tempA.next
                    tempB = tempB.next
            }
        }
        return null
    } else if (headBArray.length > headAArray.length) {
        for (let i = 0; i < headBArray.length - headAArray.length; i++) {
            tempB = tempB.next
        }
        while (tempA && tempB) {
             if (tempA === tempB) {
                    return tempA
                } else {
                    tempA = tempA.next
                    tempB = tempB.next
                }
            }
        return null
    } else {
        while (tempA && tempB) {
             if (tempA === tempB) {
                    return tempA
                } else {
                    tempA = tempA.next
                    tempB = tempB.next
                }
            }
        return null
    }
};