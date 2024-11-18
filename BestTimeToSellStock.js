/*
121. Best Time to Buy and Sell Stock
You are given an array prices where prices[i] is the price of a given stock on the ith day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

Example 1:

Input: prices = [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
Example 2:

Input: prices = [7,6,4,3,1]
Output: 0
Explanation: In this case, no transactions are done and the max profit = 0.

*/

/*
Pseudocode:
1.map through the array, to find the smallers t number . Buy the stock on that day.
2. map through the numbers after buy date to find the largest profit day to sell it.

*/
//Solution:
var maxProfit = function(prices) {
    let buyDay = Math.min(...prices);
    let buyIndex = prices.indexOf(buyDay);
    // console.log(buyindex);
    let maxProfit = 0;
    for (let i = buyIndex + 1; i < prices.length; i++) {
        // Calculate profit by selling at the current price
        let profit = prices[i] - buyDay;
        // Update maxProfit if this profit is greater
        if (profit > maxProfit) {
            maxProfit = profit;
        }
    }

    return maxProfit;
};


console.log(maxProfit([7,1,5,3,6,4]))
console.log(maxProfit([7,6,4,3,1]))
console.log(maxProfit([1,2]))
console.log(maxProfit([2,4,1])) //output : 2

//Solution 2:

var maxProfit = function(prices) {
    let maxProfit = 0; // Initialize maxProfit
    let minPrice = Infinity; // Start with a very high minimum price

    // Loop through each price
    for (let price of prices) {
        // Update the minimum price if the current price is lower
        if (price < minPrice) {
            minPrice = price;
        } else {
            // Calculate profit if selling at the current price
            let profit = price - minPrice;
            // Update maxProfit if this profit is greater
            maxProfit = Math.max(maxProfit, profit);
        }
    }

    return maxProfit; // Return the maximum profit
};

// Test cases
console.log(maxProfit([7, 1, 5, 3, 6, 4])); // Output: 5
console.log(maxProfit([7, 6, 4, 3, 1])); // Output: 0
console.log(maxProfit([1, 2])); // Output: 1
console.log(maxProfit([2, 4, 1])); // Output: 2



