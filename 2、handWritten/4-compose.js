// Copyright 2021 zhaoguoxing
const compose = (...func) => {
    // console.log('func',func);
    return function (...args) {
        // console.log('func',args);
        return func.reduceRight((result, fn) => fn.call(null, result),args)
    }
}
const multiply20 = (price) => price * 20;
const divide100 = (price) => price / 100;
const normalizePrice = (price) => price.toFixed(2);
const discount = compose(normalizePrice, divide100, multiply20);
console.log(discount(200.0)); //40.00