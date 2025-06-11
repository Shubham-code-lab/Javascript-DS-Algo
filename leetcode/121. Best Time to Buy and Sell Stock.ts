//Tow pointer

function maxProfit(prices: number[]): number {
    let [l, r] = [0, 1];
    let profit = 0;
    while (r < prices.length) {
        if (prices[l] < prices[r]) {
            profit = Math.max(profit, (prices[r] - prices[l]));
        } else l = r;
        r++;
    }
    return profit;
};
