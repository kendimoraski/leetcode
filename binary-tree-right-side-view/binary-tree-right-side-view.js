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
 * @return {number[]}
 */
var rightSideView = function(root) {
    // Input: [1, 2]
    // Output: [1, 2]
    
    // We want to traverse from the root down DFS style to the rightmost nodes (if they exist)
    // I think that I can traverse the tree recursively, but based on the order in which I tell it to traverse, as well as any conditionals, I can just output the rightmost nodes that would be "visible to me"
    // If there are, for example, children nodes of the 5 in Example 1, those nodes are deeper than the rightmost child 4, therefore if they aren't "blocked" by something more right, those are also visible to me.
    // Edge Case
    if (!root) return []
    
    // Initialize an output array to store "rightviews", which are nodes that are rightmost as traversed
    const ans = []
    const queue = []
    
    queue.push(root)
    
    // While something in the queue exists
    // Each iteration of the while loop goes down 1 level
    while (queue.length) {
        // Intialize a level array each time
        const level = []
        const size = queue.length
        for (let i = 0; i < size; i++) {
            const node = queue.shift()
            level.push(node.val)
            if (node.left) {
                queue.push(node.left)
            }
            if (node.right) {
                queue.push(node.right)
            }
        }
        ans.push(level[level.length - 1])
    }
    return ans
    
    // Declare a recursive function
        // base case 
        // There are no children to the left or right of the current root
            // Check if there is a *righter* more value *at the same level*
                // push to the output array the root's value
    
        // Recursive cases
        // If there is a right child of the current root
            // invoke the recursive function passing in root.right
        // If there is a left child
            // call recursive func on root.left
    
    // return the invocation of the recursive function with root
};