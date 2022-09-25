/**
 * Ланцюг викликів  - chaning
 * - Коли потрібно зробити декілька операцій
 */

const numbers = [1, 5, 2, 4, 3];

// фільтруємо ті які більше >2
const greaterThenTwo = numbers.filter(num => num > 2);
console.log(greaterThenTwo);

// потроюємо значення
const multByThree = greaterThenTwo.map(num => num * 3);
console.log(multByThree);

// сортуємо
const sortd = multByThree.sort((a, b) => a - b);
console.log(sortd);

/**
 * Ланцюг попередніг трьох
 * - це працює завдяки тому що ці методи повератють новий масив,
 * виходить ось такий ланцюг
 */
const sorted = numbers
  .filter(num => num > 2)
  .map(num => num * 3) // на результаті filter викликається map
  .sort((a, b) => a - b); // на результаті map викликається sort

console.log(sorted);
