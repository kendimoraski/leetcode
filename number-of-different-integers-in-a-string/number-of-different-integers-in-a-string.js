/**
 * @param {string} word
 * @return {number}
 */
var numDifferentIntegers = function(word) {
    const letters = 'abcdefghijklmnopqrstuvwxyz'

    let newWord = ''
    for (let i = 0; i < word.length; i++) {
        if (letters.includes(word[i])) {
            newWord += ' '
        } else {
            newWord += word[i]
        }
    }
    const splitStr = newWord.split(' ')
    const numbers = splitStr.filter(x => x !== ' ' && x !== '').map(x => Number(x))
    console.log(numbers)
    const memo = {}
    let fakeCounter = 0
    
    for (let i = 0; i < numbers.length; i++) {
        if (!memo[numbers[i]]) {
            memo[numbers[i]] = 1
        } else {
            if (numbers[i] === Infinity) {
                numbers[i] = fakeCounter
                fakeCounter++
            }
            memo[numbers[i]]++
        }
    }
    console.log(memo)
    return Object.keys(memo).length
};