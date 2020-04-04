/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    if (prices.length <= 1) {
        return 0;   
    }
    let [first, ...rest] = prices
    let minPricePrior = first;
    let maxProfit = 0;
    for (let price of rest) {
        if (price > minPricePrior) {
            const priceDiff =  price - minPricePrior;
            if (maxProfit < priceDiff) {
                maxProfit = priceDiff;
            }
        }
        if (minPricePrior > price) {
            minPricePrior = price;
        }
    }
    return maxProfit;
};