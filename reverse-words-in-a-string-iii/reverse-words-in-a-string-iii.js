/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    // I would split the string by single space
    const arr = s.split(' ')
    return arr.map(x => x.split('').reverse().join('')).join(' ')
};