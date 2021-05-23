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
var minDepth = function(root) {
    // LOGIC 
    // I could traverse through the tree and simply keep track of the current minimum depth of each child of the root
    // I would use recursion to traverse through the tree to check every possible path
    
    // PSEUDO-CODE

    // initialize a recursive function
    function getMin(root) {    
        // initialize a variable for current min depth
        let currMinDepth = 0
        
        // take care of base cases
        if (!root) return currMinDepth
        if (!root.right && !root.left) return currMinDepth + 1
        
        // check the path from root to left and compare with current min depth; reassign or don't accordingly
        const left = getMin(root.left)
        const right = getMin(root.right)
        
        // if left doesn't exist, right is automatically currMinDepth
        if (!root.left) {
            currMinDepth = right
        } else if (!root.right) {
            currMinDepth = left
        // if the left root exists and it's less than or equal to right
        } else if (left <= right) {
            currMinDepth = left
        // if the right root exists and it's less than or equal to left
        } else if (right <= left) {
            currMinDepth = right
        }
        
        // recursion stops when we've reached a leaf (null) AND we go back to the root by returning the lesser depth
        // remember that the root by itself counts as depth 1
        return currMinDepth + 1
    }
    // return the curr min depth
    return getMin(root)
};