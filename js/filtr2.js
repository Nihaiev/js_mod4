/**
 * Array.prototype.filter()
 * - Поелементно перебирає оригінальний масив
 *  - Повертає новий масив (з елементами або порожній)
 *  - Добавляє і повертає масив елементи якого задовільняють умові калбек-функції
 *  - Якщо колбек повернув true елемент добавляється у повертаємий масив
 *  - Якщо колбек повернув false елемент Не додається у повертаємий масив
 *
 *
 */

const numbers = [5, 10, 15, 20, 25];

const filteredNumbers = numbers.filter(number => {
  console.log(number);
  return number < 15 || number > 20; // в return можу бути вираз будьякої складності, лиш би воно повернуло true /false
});

console.log(filteredNumbers);

const players = [
  { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
  { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
  { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
  { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
  { id: 'player-5', name: 'Chelsy', timePlayed: 80, points: 48, online: true },
];

//39
