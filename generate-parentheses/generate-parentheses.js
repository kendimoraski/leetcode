/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    // I couldn't finish this in time on my own, so I checked a user-submitted solution that used a Map and an Array and solved the problem iteratively with dynamic programming.
    
    // We create a map to store the different combinations for each n total number of pairs
    // The keys will be the number of pairs (an integer) and the values will be arrays of the possible valid combo's of those pairs
    const map = new Map()
    // To have some starting value, let's create our first key-value pair
    map.set(0, [''])
    // We use a for loop to iterate through every number starting at 1 through n
    for (let i = 1; i <= n; i++) {
        // For each key n in our map, we initialize a new empty array to push into...
        const arr = []
        // and restart j from 0 every time ***this is vital***
        let j = 0
        while (j < i) {
            // both arrj and arri will be arrays that we will loop through nested
            const arrj = map.get(j)
            const arri = map.get(i - j - 1)
            // We can use nested for loops or nested .forEach method chaining here
            arrj.forEach(pairj => {
                arri.forEach(pairi => {
                    // We push to our arr made on line 14 to properly form the value for this key in map
                    // By arranging the following pattern for pushing every time, we can assure that there is always an opening parenthesis first, and the right combination of parenthese represented by arrj and arri's elements
                    arr.push('(' + pairj + ')' + pairi)
                })
            })
            // Increment j and continue this while loop process until it is no longer less than i
            j++
        }
        // We set the completed array as a value for key i in the map
        map.set(i, arr)
    }
    // Finally, we can just return the array represented as a value of key n in our map
    return map.get(n)
};