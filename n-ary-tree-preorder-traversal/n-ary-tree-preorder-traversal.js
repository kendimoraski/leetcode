/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */

/* ITERATIVE SOLUTION CONVERTED FROM PYTHON */

var preorder = function(root) {

    if (!root) return []
    
    let stack = [root]
    
    const out = []
    
    while (stack.length) {
        let temp = stack.pop()
        out.push(temp.val)
        stack.push(...temp.children.reverse())
    }
    
    return out
    
}