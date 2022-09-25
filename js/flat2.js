/**
 * Array.prototype.flat(depth)
 *  - Розгладжує масив до вказаної глібини
 *  - За замовчуванням глібина 1
 *  - він не змінює оригінал, він повертає новий масив уже розгладжений
 */

const array = [1, 2, [4, [5]], [6, [7, 8, [9]]]]; // багатомірний масив
console.log(array.flat(3)); // викликаємо flat і за замовчування розгладжує на 1

/**
 * Array.prototype.flatMap(callback)
 * - комбінація map+flat
 */

const tweets = [
  { id: '000', likes: 5, tags: ['js', 'nodejs'] },
  { id: '001', likes: 2, tags: ['html', 'css'] },
  { id: '002', likes: 17, tags: ['html', 'js', 'nodejs'] },
  { id: '003', likes: 8, tags: ['css', 'react'] },
  { id: '004', likes: 0, tags: ['js', 'nodejs', 'react'] },
];

const tags = tweets.flatMap(t => t.tags);
console.log(tags);
