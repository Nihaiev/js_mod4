/*
 * Array.prototype.map()
 * - Поелементно перебирає оригінальний масив
 * - Не змінює оригінальний масив
 * - Повернтає новий масив такої ж довжини
 */

// const numbers = [5, 10, 15, 20, 25];

// const doubledNums = numbers.map((number) => {
//     console.log(number);
// })

// концепція .map() перебирає поелементно масив, повертає масив такої ж довжини

const players = [
  { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
  { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
  { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
  { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
  { id: 'player-5', name: 'Chelsy', timePlayed: 80, points: 48, online: true },
];
// отримуємо масив імен всіх іграків

const playerNames = players.map(player => {
    console.log(player);
    return player.name;
 });
console.log('playerNames', playerNames);

// список id

const playerIds = players.map(player => player.id)
console.log('playerIds', playerIds);

const res = players.map(player => {
    return {
        name: player.name,
        online: player.online,
    };
})
console.log(res); 

/**
 * map вміє витягнути одинакові значення однієї і тієї ж властивості (список всіх імен, всіх хлбі, всіх id)
 * він може не змінно обновити повністю цілий масив тобто створити новий масив з оновленними властивостями
 * або повернети новий масив з одним користувачем 
 * 
 */