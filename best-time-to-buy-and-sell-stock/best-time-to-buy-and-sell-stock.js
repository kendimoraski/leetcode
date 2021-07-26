/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    // You can use nested for loops to track which day succeeding the lowest buy day is the highest sell day, and return their difference tracked as a running maximum profit
    // Alternatively, for when arrays are very long, I can first find the lowest price to buy while simultaneously finding the max profit at that time; this can take place during the same iteration. Therefore, we can accomplish this in one pass
    
    // initialize a running maximum profit variable
    // initialize a total maximum profit to compare the running variable against

    let totalProfit = 0
    let runningBuy = Infinity

    
    // initialize a for loop to find the lowest buy day (note that 0 is the lowest it can be)
    for (let i = 0; i < prices.length; i++) {
        // mark the buy day as a variable for ease of remembering
        // start a for loop at this buy day checking the succeeding days ONLY
            // calculate the difference if you were to sell on that "sell day"
            // compare the current profit of selling to the maximum
            // reassign accordingly
        if (prices[i] < runningBuy) {
            runningBuy = prices[i]
        } else if (prices[i] - runningBuy > totalProfit) {
            totalProfit = prices[i] - runningBuy
        }
    }
    // after all the possible buy + sell combo's have been checked, return the maximum profit
    return totalProfit
};