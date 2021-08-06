/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
var deleteNode = function(node) {
    // We can't use the dummy head technique we would normally use because we aren't given the head, so we can only work with the given node
    // This assigns the value to the value of the next node
    node.val = node.next.val
    node.next = node.next.next
};