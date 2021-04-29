/**
 * @param {number} area
 * @return {number[]}
 */
var constructRectangle = function(area) {
    // area is equal length times width
    // we want to start at the square root because it's as close as possible
    let closest = Math.floor(Math.sqrt(area))
        // we want to check if it's a perfect divisor
    while (area % closest !== 0) {
        closest--
    }
    return [(area / closest), closest]
};