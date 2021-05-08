/**
 * Definition for a binary tree node. THIS IS A CLASS
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
    // given an array nums, find the "midpoint" and that becomes the root
    // anything less is left, anything greater is right
    function makeNode(left, right) {    
        // base case
        if (left > right) {
            return null
        }
        const midIdx = Math.floor((left + right) / 2)
        const newNode = new TreeNode(nums[midIdx])
        newNode.left = makeNode(left, midIdx -1)
        newNode.right = makeNode(midIdx + 1, right)
        return newNode
    }
    return makeNode(0, nums.length - 1)
};