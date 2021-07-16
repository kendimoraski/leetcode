/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    // I could use a stack to store the parens values as I traverse the string
    // When an open parens is entered, another open parens of the same type, or a different type, is okay to enter the stack after
    // When a closing parens is added, it must be of the same type as the open parens before it
    // Likewise, closing parens can follow each other
    
    // initiate a stack
    const stack = []
    
    // initiate string iterator
    let i = 0
    
    // while the there are characters left in the string
        // add the first parens of the string to the stack
            // if the string is a closing string
                // check if the string before it is an opening string
                    // check if it's a matching type
                        // if not, return false
                        // if so, pop off the opener from the stack
                    // remove it from the string
        // increment the iterator
    while (i < s.length) {
        if (s[i] === '[' || s[i] === '(' || s[i] === '{') {
            stack.push(s[i])
        } else if (s[i] === ']' && stack[stack.length - 1] === '[') {
            stack.pop()
        } else if (s[i] === ')' && stack[stack.length - 1] === '(') {
            stack.pop()
        } else if (s[i] === '}' && stack[stack.length - 1] === '{') {
            stack.pop()
        } else {
            return false
        }
        i++
        console.log(stack)
    }
    // return true
    if (stack.length) {
        return false
    } else {
        return true
    }
};