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

/**
 * Кастомне сортування складних типів
 *
 */
const players = [
  { id: 'player-1', name: 'Mango', timePlayed: 310, online: false },
  { id: 'player-2', name: 'Poly', timePlayed: 470, online: true },
  { id: 'player-3', name: 'Kiwi', timePlayed: 230, online: true },
  { id: 'player-4', name: 'Ajax', timePlayed: 150, online: false },
  { id: 'player-5', name: 'Chelsey', timePlayed: 80, online: true },
];

const sortedByBestPlayers = [...players].sort((prevPlayer, nextPlayer) => {
  return nextPlayer.timePlayed - prevPlayer.timePlayed;
});
console.table(sortedByBestPlayers);

const sortedByWorstPlayers = [...players].sort((prevPlayer, nextPlayer) => {
  return prevPlayer.timePlayed - nextPlayer.timePlayed;
});
console.table(sortedByWorstPlayers);

// кастомна функція сортування по імені

const byName = [...players].sort((a, b) => {
  const result = a.name[0] > b.name[0];
  if (result) {
    return 1;
  }
  if (!result) {
    return -1;
  }
});

console.table(byName);

/**
 * Метод charCodeAt() возвращает числовое значение Юникода для символа по указанному индексу
 * (за исключением кодовых точек Юникода, больших 0x10000).
 */
const str = 'abc';
console.log(str.charCodeAt(2));
