function getMaxProfit(stockPrices) {

  // Calculate the max profit
  //Input: Array of stockPrices (indices are time in mins)
    //Track max profit = what you sell it for - price you got it for
    //Track min price you got for
    //Loop through the array to compare for best values and update variables
  //Output: Best profit
  
 //Add edge case because profit requires buying AND selling, so can't be less than 2;
 if (stockPrices.length < 2)  throw new error;

//Setting up base maxProfit and minPrice to compare later on
let maxProfit = stockPrices[1] - stockPrices[0];
let minPrice = stockPrices[0];
  
 // Start the loop at index 1 since we can't sell at the first one, have to buy first
 // AND can't sell and buy at the same time.
for (let i = 1; i < stockPrices.length; i++) {
  const currentPrice = stockPrices[i];

  // Calculates what our potential profit would be if we bought at the minPrice right now
  // and sold at the current price
  let potentialProfit = currentPrice - minPrice;
  
  // Updates the minPrice to track the lowest price we've iterate through
  minPrice = Math.min(minPrice, currentPrice);
  
  // Updates the maxProfit to track if there will better
  maxProfit = Math.max(maxProfit, potentialProfit);
  
}
  return maxProfit;
}
