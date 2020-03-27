/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */

// top down (backtracking and memoization)
// var coinChange = function(coins, amount) {
//     if (amount === 0) {
//         return 0;
//     }
//     const mem = {};
//     recurse(coins, amount, mem);

//     if (!mem[amount] || mem[amount] === Infinity) {
//         return -1;
//     } else {
//         return mem[amount];
//     }
// };

// const recurse = function (coins, amount, mem) {
//     if (amount === 0) return 0;
//     if (amount in mem) return mem[amount];
//     for (const coin of coins) {
//         if (coin <= amount) {
//             const levels = recurse(coins, amount - coin, mem);
//             mem[amount] = Math.min(levels + 1, mem[amount] || Infinity);
//         }
//     }
//     return mem[amount] || Infinity;
// };