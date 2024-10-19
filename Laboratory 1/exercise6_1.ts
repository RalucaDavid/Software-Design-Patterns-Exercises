
let list: number[] = [2, 4, 6, 10, 12];

const sum: number = list.reduce((sum: number, element: number) => {
    return sum + element;
}, 0);

console.log(sum);

