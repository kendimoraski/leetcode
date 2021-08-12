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
var deleteDuplicates = function(head) {
    // I think I can use an iterator to move down the linked list. The trick is, we need to delete not just duplicates, but any instances of that node that exists more than once in the list. We want to make sure that we move until the end of a "duplicates sublist" and call on the NEXT node after that because we don't want to include a single value from tha list. This way, I can get rid of (meaning skip) the nodes that I don't want to include.
    // Because we're going to be deleting nodes, we should initialize an dummy LL, one that corresponds with its own iterator, to ultimately return.
    
    // Initialize a sentinel/dummy head whose next value is the given `head`
    const ans = new ListNode(0, head)
    // Create an iterator that will represent the last node before the sublist of duplicates
    let prev = ans
    // While there are nodes left in the head to iterate through
    while (head) {
        // Check if the first node has a duplicate        
        if (head.next && head.val === head.next.val) {
            // We need to move until the end of the duplicates sublist
            while (head.next && head.val === head.next.val) {
                head = head.next
            }
            // After that, we then skip all the duplicates
            prev.next = head.next
        } else {
            // Otherwise, we move the way down the list that we normally would
            prev = prev.next 
        }
        head = head.next
    }
    // Return the dummy LL
    return ans.next
};