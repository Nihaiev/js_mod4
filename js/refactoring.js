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


/**
 * Сортуємо тих хто онлайн по рангу 
 */

// const players = [
//     { id: 'id-1', tag: 'Mango', isOnline: true, rank: 800 },
//     { id: 'id-2', tag: 'Poly', isOnline: false, rank: 600 },
//     { id: 'id-3', tag: 'Ajax', isOnline: true, rank: 100 },
//     { id: 'id-4', tag: 'Kiwi', isOnline: true, rank: 400 },
    
// ];
// Класична
// const onlineAndSorted = players
//     .filter(function (player) {
//         return player.isOnline;
//     })
//     .sort(function (prevPlayer, nextPlayer) {
//         return prevPlayer.rank - nextPlayer.rank;
//     });


// Стрілкова => arrow 

    // const onlineAndSorted = players
    // .filter((player) => player.isOnline)
    // .sort((prevPlayer, nextPlayer) => prevPlayer.rank - nextPlayer.rank);

    // console.table(onlineAndSorted);

/**
 * Збільшуємо кількість поінтів кожного гравця
 */

const players = [
    { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
    { id: 'player-2', name: 'Poly', timePlayed: 470, points: 94, online: true },
    { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
    { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
    { id: 'player-5', name: 'Chelsy', timePlayed: 80, points: 48, online: true },
];

// const updatePlayers = players.map(function (player){
//     return{
//         ...player,
//         points:player.points+player.points*0.1,
//     };
// });

// рефакторинг
// const updatePlayers = players.map((player)=>{
//     return{
//         ...player,
//         points:player.points+player.points*0.1,
//     };
// });

//другий варіант

/**
 * Якщо нам з "стрілки" треба щось повернути ми після = відкриваємо дужки (і ставимо туди вираз)  
 */
// const updatePlayers = players.map((player)=>({

//         ...player,
//         points:player.points+player.points*0.1,
// }));

// console.table(updatePlayers);

/**
 * Збільшуємо кількість годин гравця по id
 */

const playerIdToUpdate = 'player-3';

// const updatePlayers = players.map(function (player) {
//     if (player.id === playerIdToUpdate) {
//         return {
//             ...player,
//             timePlayed: player.timePlayed + 50,
//         };
//     }
//     return player;
// })

// рефакторимо


// const updatePlayers = players.map((player) => {
//     if (player.id === playerIdToUpdate) {
//         return {
//             ...player,
//             timePlayed: player.timePlayed + 50,
//         };
//     }
//     return player;
// })

/**
 * можемо відрефакторити використовуючи тернарний оператор 
 * в такій операції можемо використовувати тернарник тому що він використовується в операцації присвоєння і повернення  
 * оператор return це те ж саме присвоювання 
 */

const updatePlayers = players.map(player => player.id === playerIdToUpdate  //тут з return ми можемо повернути або ...player, або :player;
        ? {
            ...player,
            timePlayed: player.timePlayed + 50,
        }
        :player,
);

console.table(updatePlayers);