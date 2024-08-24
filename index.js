// src/index.js

/**
 * Calculate Simple Interest
 * @param {number} principal - The principal amount
 * @param {number} rate - The rate of interest per period
 * @param {number} time - The time the money is invested or borrowed for, in periods
 * @returns {number} - The simple interest
 */
function calculateSimpleInterest(principal, rate, time) {
    if (principal <= 0 || rate <= 0 || time <= 0) {
      throw new Error('All parameters must be greater than zero');
    }
    return (principal * rate * time) / 100;
  }
//   const t=calculateSimpleInterest(2000,5,5);
//   console.log(t)
  module.exports = calculateSimpleInterest;
  