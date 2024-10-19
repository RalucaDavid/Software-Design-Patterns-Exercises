var list = [2, 4, 6, 10, 12];

var sum = list.reduce(function (sum, element) {
    return sum + element;
}, 0);

console.log(sum);
