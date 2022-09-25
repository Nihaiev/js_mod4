/**
 * Lodash -бібліотека методів масивів
 * коли не було map, reduce всі юзали lodash
 */
console.dir(_); //це глобальна змінна через яку Lodash нам відкриває свої методи

/**
 * isEmpty()
 *  - перевіряє пуста/не пуста сутність
 */

console.log(_.isEmpty({}));
console.log(_.isEmpty({ a: 1 }));

/**
 * get()
 *  - щось глібоко в обєкті подивитись
 */

const user = {
  name: 'mango',
  location: {
    coords: [1, 2],
    city: 'Lviv',
  },
};

// console.log(_.get(user, 'location.city'));

console.log(user?.location?.city); //новий синтаксис JS (? якщо цієї властивосіт нема то далі уже не шукай)

/**
 * union()
 *
 */

console.log(_.union([1, 2, 3], [3, 4, 5]));

/**
 * range()
 * представте що треба зробити масив від 1до 10
 * можна просто викликати метод range в lodash
 * _.range([start=0], end, [step=1])
 */
console.log(_.range([(10, 51)]));

/**
 * sortBy()
 *_.sortBy(collection, [iteratees=[_.identity]])
 */
const users = [
  { user: 'fred', age: 48 },
  { user: 'barney', age: 36 },
  { user: 'fred', age: 40 },
  { user: 'barney', age: 34 },
];
console.table(_.sortBy(users, user => user.age));

/**
 * sum() і sumBy()
 * якщо треба порахувати суму, повертає масив чисел
 */

console.log(_.sum([1, 2, 3, 4, 5])); //поверта суму

const players = [
  { id: 'player-1', name: 'Mango', timePlayed: 310, online: false },
  { id: 'player-2', name: 'Poly', timePlayed: 470, online: true },
  { id: 'player-3', name: 'Kiwi', timePlayed: 230, online: true },
  { id: 'player-4', name: 'Ajax', timePlayed: 150, online: false },
  { id: 'player-5', name: 'Chelsey', timePlayed: 80, online: true },
];
console.log(_.sumBy(players, player => player.timePlayed)); //суму із масиву

/**
 * uniq() та UniqBy()
 * sortedUniq() та sortedUniqBy()
 */

/**
 * random()
 *
 */

/**
 * min() та max()
 * minBy та maxBy()
 */

/**
 * camelCase(), capitalize(), kebabCase()
 */
