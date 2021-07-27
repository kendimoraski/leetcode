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

function preorderTraversal(root) {
    const ans = []
    helper(root, ans)
    return ans
}

var helper = function(root, arr) {
    if (!root) return
    
    if (!root.left && !root.right) {
        // push the root itself
        arr.push(root.val)
        return
    }
    // push the root itself
    arr.push(root.val)
    // If there are nodes to the left
    if (root.left) {
        // Call the function recursively on the left nodes and save this to a variable
    // push this result separately into the answer array
        helper(root.left, arr)
    }
    // If there are nodes to the right
    // Call the function recursively on the right nodes
    if (root.right) {
        helper(root.right, arr)
    }
};
 