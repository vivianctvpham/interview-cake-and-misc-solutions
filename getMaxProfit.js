function getMaxProfit(stockPrices) {

  // Calculate the max profit
  //Input: Array of stockPrices (indices are time in mins)
    //Track max profit = what you sell it for - price you got it for
    //Track min price you got for
    //Loop through the array to compare for best values and update variables
  //Output: Best profit
  
 if (stockPrices.length < 2)  throw new error;

let maxProfit = stockPrices[1] - stockPrices[0];
let minPrice = stockPrices[0];

for (let i = 1; i < stockPrices.length; i++) {
  const currentPrice = stockPrices[i];

  let potentialProfit = currentPrice - minPrice;
  
  minPrice = Math.min(minPrice, currentPrice);
  
  maxProfit = Math.max(maxProfit, potentialProfit);
  
}
  return maxProfit;
}
