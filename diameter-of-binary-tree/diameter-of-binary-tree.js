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
var diameterOfBinaryTree = function(root) {
    // LOGIC
    // I will count the number of edges that's on the left of the "root" (using recursion)
    // add that to the number of edges on the right of the "root"
    // keep track of this highest diameter and compare with the next diameter 
    // when you go back up to a node, only return the GREATER of the left or right paths
    
    // PSEUDOCODE
    // initialize a highest diameter variable
    let highestDiameter = -Infinity
    // create a function that will be called recursively on left and right children
    function getDiameter(root) {
        // initialize a current diameter
        let currentDiameter = 0
        // base case
        if (!root) return currentDiameter
        // count the number of nodes to the bottom on the left first
        // count the number of nodes to the bottom right
        // add the left number of edges to the right number of edges to get the current diameter
        // (also save these recursive calls as variables so the recursive function is not called too many times for efficiency's sake) 
        const left = getDiameter(root.left)
        const right = getDiameter(root.right)
        currentDiameter = left + right
        // compare the current diameter with the highest diameter
        if (currentDiameter > highestDiameter) {
            // if larger than highest diameter, reassign highest diameter to current
            highestDiameter = currentDiameter
        }
            // if not ignore (highest diameter stays what it was before)
        // when you finish the recursive function, go back up a node BY returning the greater of the two diameters
        return Math.max(left, right) + 1
    }
    getDiameter(root)
    // after checking everything, return the highest diameter overall
    return highestDiameter
};