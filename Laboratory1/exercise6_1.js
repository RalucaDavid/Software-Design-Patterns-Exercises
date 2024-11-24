"use strict";
let list = [2, 4, 6, 10, 12];
const sum = list.reduce((sum, element) => {
    return sum + element;
}, 0);
console.log(sum);
