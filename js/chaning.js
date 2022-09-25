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
 *
 */
const sorted = numbers
  .filter(num => num > 2)
  .map(num => num * 3) // на результаті filter викликається map
  .sort((a, b) => a - b); // на результаті map викликається sort

console.log(sorted);

/**
 * Сортуємо тих хто онлайн по рангу
 *  - з початку фільруємо
 *  - потім сортуємо
 * - якщо нам треба зробити заперечення ставимо просто ! (не)
 */

const players = [
  { id: 'id-1', tag: 'Mango', isOnline: true, rank: 800 },
  { id: 'id-2', tag: 'Poly', isOnline: false, rank: 600 },
  { id: 'id-3', tag: 'Ajax', isOnline: true, rank: 100 },
  { id: 'id-4', tag: 'Kiwi', isOnline: true, rank: 400 },
];

const onlineAndSorted = players
  .filter(player => player.isOnline)
  .sort((playerA, playerB) => playerA.rank - playerB.rank);

console.table(onlineAndSorted);

/**
 * Chaining в методах обєкта як jquery
 * jquery - це бібліотека для роботи з інтерфейсом
 */

const element = {
  class: '',
  hovered: false,
  changeClass(cls) {
    this.class = cls;
    return this;
  },
  toggleHovered() {
    this.hovered = !this.hovered;
    return this;
  },
};

element.toggleHovered().changeClass('open').toggleHovered();
console.log(element);
