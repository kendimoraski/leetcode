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
var inorderTraversal = function(root) {
    // First let me try to solve this with recursion. Inorder means left then root then right, so I could use recursion on the leftmost branches first, then the root, then the rightmost branches/nodes.
    /*
    // Initialize an empty array for our answer
    const ans = []
    // Edge case
    if (!root) return ans
    // Define a recursive function
    var inorder = function(root) {
        // Define a base case, which is no more children meaning we're at a leaf node
        if (!root.left && !root.right) {
            // push this value into our answer array
            ans.push(root.val)
        } else {
            // If nodes to the left exist,
            if (root.left) {
                // call the function recursively on the left
                inorder(root.left)
            }
            // Then, traverse the root by adding it to the answer array
            ans.push(root.val)
            // If nodes to the right exist
            if (root.right) {
                // call the function recurisvely on the right   
                inorder(root.right)
            }
        }
        // return the answer array
        return ans
    }
    return inorder(root)
    */
    // To solve this problem iteratively, we will use a stack to mimic the vertical performance of depth-first search, since this problem is concerned with inorder traversal. 
    // With a stack, you wouuld be pushing and popping the current node of traversal that you are on. This replaces what would be the call stack in the recursive version of this problem.
    
    // Initialize a stack, which for the purposes of time will be represented as an array
    const stack = []
    // Initialize an answer array
    const ans = []
    // We're going to make a copy of the root argument because it will be reassigned multiple times in our loop
    let curr = root
    // It makes sense to use a while loop that runs/goes until the stack is empty. Instead of making a separate edge case for a null root, and then having to add something to the stack to begin with, we can leverage the || operator and put an argument before `stack.length`
    while (curr || stack.length) {
        // We want to push nodes onto the stack and when they get popped off, add them to the array *inorder*
        // We use a second inner while loop in order to traverse and take care of all the leftmost nodes in full first
        while (curr) {
            // Push curr's value into the stack
            // Note: in Javascript you *can* push a whole TreeNode class into a stack when the stack is just an array
            stack.push(curr)
            // Traverse more to the left
            curr = curr.left
        }
        // Pop off the stack and reassign curr to that
        curr = stack.pop()
        // Add that to our answer
        ans.push(curr.val)
        // Traverse to the right
        curr = curr.right
    }
    return ans
};