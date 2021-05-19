/**
 * @param {string} number
 * @return {string}
 */
var reformatNumber = function(number) {

    const newNumber = number.split('').filter(x => x !== '-' && x !== ' ')
    
    // if the newNumber's total length is already 3 or less, simply join and return as is
    if (newNumber.length <= 3) return newNumber.join('');
    
    let len = newNumber.length
    let res = [];
    
    // loop through the newNumber
    for (let i = 0; i < newNumber.length; i++) {
        // if there are 4 or more elements
        if (i + 4 >= len) {
            let len = newNumber.slice(i, i + 4).length
            if (len <= 3) {
                res.push(newNumber.slice(i, i + 4).join(''))
                break
            }
            // if it has 4 elements, push them into res as blocks of 2 joined together
            if (len === 4) {
                res.push(newNumber.slice(i, i + 2).join(''))
                res.push(newNumber.slice(i + 2).join(''))
                break
            }
        } else {
            // otherwise, keep pushing them in as groups of 3
            res.push(newNumber.slice(i, i+ 3).join(''))
            // move over 2 spaces
            i += 2
        }
        
    }
    return res.join('-')
};