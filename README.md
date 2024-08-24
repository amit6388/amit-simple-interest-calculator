# Simple Interest Calculator

const calculateSimpleInterest = require('simple-interest-calculator');
const principal = 2000; // The principal amount
const rate = 5;         // The annual interest rate (in percentage)
const time = 5;         // The time period in years

const interest = calculateSimpleInterest(principal, rate, time);
console.log(`The simple interest is: ${interest}`); // Output: The simple interest is: 500
const principal = 2000; // The principal amount
const rate = 5;         // The annual interest rate (in percentage)
const time = 5;         // The time period in years

const interest = calculateSimpleInterest(principal, rate, time);
console.log(`The simple interest is: ${interest}`); // Output: The simple interest is: 500




[![npm version](https://badge.fury.io/js/simple-interest-calculator.svg)](https://badge.fury.io/js/simple-interest-calculator)

A lightweight npm library for calculating simple interest. This library provides a function to compute the simple interest based on the principal amount, rate of interest, and time period.

## Features

- **Easy to use:** Just call the function with the principal, rate, and time to get the simple interest.
- **Lightweight:** No external dependencies.
- **Error Handling:** Validates that all input parameters are greater than zero.

## Installation

You can install the library using npm:

```bash
npm install simple-interest-calculator
