/**
 * @param {number[][]} trees
 * @return {number[][]}
 */
var outerTrees = function(trees) {
    // We initialize a new Set
    let hull = new Set()
    // If there are less than 4 points/trees
    if (trees.length < 4) {
        for (let tree of trees) {
            hull.add(tree)
        }
        return [...hull]
    }
    let leftMost = 0
    for (let i = 0; i < trees.length; i++) {
        // if the X-coord of a tree is less than the leftmost X-coord
        if (trees[i][0] < trees[leftMost][0]) {
            // reassign it to be the current X-coord
            leftMost = i
        }
    }
    let p = leftMost
    do {
        let q = (p + 1) % trees.length
        for (let i = 0; i < trees.length; i++) {
            if (orientation(trees[p], trees[i], trees[q]) < 0) {
                q = i
            }
        }
        for (let i = 0; i < trees.length; i++) {
            if (i !== p && i !== q && orientation(trees[p], trees[i], trees[q]) === 0 && inBetween(trees[p], trees[i], trees[q])) {
                hull.add(trees[i])
            }
        }
        hull.add(trees[q])
        p = q
    }
    while (p !== leftMost)
    return [...hull]
};

var orientation = function(p, q, r) {
    return (q[1] - p[1]) * (r[0] - q[0]) - (q[0] - p[0]) * (r[1] - q[1])
}

var inBetween = function(p, i, q) {
    // Declare boolean variables for x and y coordinates
    let x = i[0] >= p[0] && i[0] <= q[0] || i[0] <= p[0] && i[0] >= q[0]
    let y = i[1] >= p[1] && i[1] <= q[1] || i[1] <= p[1] && i[1] >= q[1]
    return x && y
}