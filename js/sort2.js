/**
 * Array.prototype.sort(callback(currentEl, nextEl){})
 * - Сортуємо і ЗМІНЮЄМО оригінальний масив
 * - За замовчуванням:
 *   - сортуємо по зростанню
 *  - приводимо елементи до рядка і сортуємо по [Unicode]
 */

const numbers = [1, 9, 6, 2, 3];
// numbers.sort();
// console.log('numbers', numbers);

const letters = ['b', 'B', 'a', 'A'];
letters.sort();
// console.log('letters', letters);

/**
 * compareFunction - Функція порівняння (callback)
 * Елементи масиву сортуються у співвідношені з його повертаючими значеннями
 *  - якщо compareFunction(A,B) меньше 0, сортування ставить А перед B
 *  - якщо compareFunction(A,B) більше 0, сортування поставить B перед A
 *  - якщо compareFunction(A,B) поверне 0, сортування залишить A і B на незмінними
 * по відношенню один до одного, но відсортує їх по відношенню до всіх елементів.
 *
 */
// numbers.sort((curEl, nextEl) => {
//   return curEl - nextEl;
// });

// console.log(numbers);

/**
 * Як зробити копію масива щоб не сортувати оригінал
 *  - Array.prototye.sclice()
 * - Операція spread
 */

const descSortedNumbers = [...numbers].sort((a, b) => b - a);
const ascSortedNumbers = [...numbers].sort((a, b) => a - b);
// console.log('ascSortedNumbers', ascSortedNumbers);
// console.log('descSortedNumbers', descSortedNumbers);
// console.log('numbers', numbers);

//todo 16
