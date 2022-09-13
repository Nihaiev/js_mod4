/**
 *
 * Array.prototype.forEach(callback(curentValue, index, array), thisArg)
 *  - Поелементно перебирає оригільний масив
 *  - Нічого не повертає
 *  - Замінює класичний for, якщо потрібно то пририває цикл
 */

const numbers = [5, 10, 15, 20, 25];

numbers.forEach(function (number, index, array) {
  console.log(number);
}); // ми сюди будемо передавати callback функцію і вона буде використовуватися для кожного елементу масиву numbers
