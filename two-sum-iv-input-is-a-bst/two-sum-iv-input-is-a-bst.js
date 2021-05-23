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
 * @param {number} k
 * @return {boolean}
 */
var findTarget = function(root, k) {
    // LOGIC 
    // I think the best way to approach this would be memoization
    // I can check the tree node's values and store them in the memo
    // as soon as I come across a combination of values in the memo such that any pair 
    // equals the target, I return true
    
    // PSEUDO-CODE
    // initialize a memo to store visited values
    const memo = {}

    // create recursive function
    function lookForPair(root) {
        // base case
        if (!root) return false


        // check if the value plus any single value in memo would equal target k
        if (memo[k - root.val]) {
            // if so, return true
            return true
        } 
        
        // if the value doesn't exist yet in memo, add it
        if (!memo[root.val]) {
            memo[root.val] = true
        }
        
        // recursion ends when all nodes have been checked and no pair of values in memo can equal k
        // we use the || operator here to return true ultimately if one of these evaluates to true
        return lookForPair(root.left) || lookForPair(root.right)
    }
    return lookForPair(root)
};