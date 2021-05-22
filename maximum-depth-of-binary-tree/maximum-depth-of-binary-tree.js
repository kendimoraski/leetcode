/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
    // initialize a counter for the number of nodes to return
    let counter = 0
    // edge cases
    if (!root) return counter
    // we only want to add 1 and whichever is larger (the depth of left or right) to the counter
    counter = 1 + Math.max(maxDepth(root.left), maxDepth(root.right))
    // iterate through every branch until the max depth is found
    return counter
};