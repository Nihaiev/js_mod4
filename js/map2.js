/**
 *
 * Array.prototype.map()
 * - поелементно перебирає оригінальний масив
 * - не змінює оригінальний масив
 * - Повертає новий масив такої же довжини (не можна зробити меньший масив чи більшої довжини )
 */

// const numbers = [5, 10, 15, 20, 25];
// const dobleNums = numbers.map(number => {
//   console.log(number);
//   return number * 2;
// });
// console.log('numbers', numbers);
// console.log('dobleNums', dobleNums);

const players = [
  { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
  { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
  { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
  { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
  { id: 'player-5', name: 'Chelsy', timePlayed: 80, points: 48, online: true },
];

const playerNames = players.map(player => player.name);
console.log(playerNames);

const playerIDs = players.map(player => player.id);
console.log('playerIDs', playerIDs);

//13
