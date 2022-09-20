/**
 * Array.prototype.reduce()
 *  - Поелементно перебирає оригінальний масив
 *  - Повертає що завгодно
 * - Замінює все на світі, но використовувати треба з розумом
 */

const numbers = [5, 10, 15, 20, 25];

const total = numbers.reduce((acc, number) => {
  console.log('number', number);
  console.log('acc', acc);
}, 0);

console.log(total);
