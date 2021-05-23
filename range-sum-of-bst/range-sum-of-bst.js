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
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var rangeSumBST = function(root, low, high) {
    // LOGIC
    // traverse the tree (if there is a root at all, and if that root has any children to traverse to);
    // decide whether to go right or left at each node based on whether the current node's value is less than, greater than, or in the range of low to high
    // check each visited node's value to see if it falls between the low and the high
    // if the node's value is in the correct range, we'll add it to sum
    // after traversing the relevant nodes, we'll return that sum
    // remember all values are unique!
    
    // PSEUDO-CODE
    // initialize external sum
    let sum = 0
    // create a recursive function to call on any children that we want to process (meaning they fall within the range)
    function checkRange(node) {    

        // base case: if there is no node at all, return zero (this is best practice b/c this actually does not matter, it's not of importance what we return here because we don't end up doing anything with it)
        if (!node) return
        
        // check root value first and if it falls in the range, add to sum
        if (low <= node.val && node.val <= high) {
            sum += node.val
        }
        
        // if the values on the left are possibily within range (meaning the root node was greater than low), traverse left and process if value is in the range
        if (node.val > low) {
            checkRange(node.left)
        }
        
        // if the values on the right are possibly within range, traverse right and process if in range
        if (node.val < high) {
            checkRange(node.right)
        }
        
        // I need this to actually exit the function
        return
    }
    
    // invoke the recursive function with root
    checkRange(root)
    // then return the running sum
   return sum  
};