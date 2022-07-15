/**
 * Ланцюжок викликів
 */

const numbers = [1, 5, 2, 4, 3];
const greaterThenTwo = numbers.filter(num => num > 2);
// console.log(greaterThenTwo);

const multByTwo = greaterThenTwo.map(num => num * 3);
// console.log(multByTwo);

const sorted = multByTwo.sort((a, b) => a - b);
// console.log(sorted);


// Ланцюгові функції
//оригінал
// const res = numbers
//     .filter(function (num){
//         return num> 2;
//     })
//     .map(function (num) {
//         return num * 3;
//     })
//     .sort(function (a, b) {
//         return a - b;
// })


// переводимо ланцюгову у стрілочку, бачимо як стало мало кода 
const res = numbers
    .filter(num => num > 2)
    .map(num => num * 3)
    .sort((a, b) => a - b);

    // console.log(res);

    // TODO 32