//! LESSON 7

// function foo(callback) { //calback -> undefined
//     callback(10) // undefined
// }
// function logger(value) {
//     console.log(value);
// }

// foo(logger); // logger(5) -> undefined

/** forEach
 * 
*/
// const users = [
//     { name: 'Denis' },
//     {name:'Dima'}
// ]


// users.forEach((user, index, array) => {
//     console.log('user', user);
//     console.log('index', index);
//     console.log('array', array);
// })


/**
 * явне і неявне повернення 
 */

// const dum = (a, b) => {
//     console.log(a, b);
//     return a + b
// }
// console.log(sum(2,2));

// function createObj = (name, age) => ({name, age})

// console.log(createObj('Denis, 33'));


/**
 * Example 3
 */

function each(arr, callback) {
    for (let i = 0; i < arr.length; i += 1){
        const callbackREsult = callback(arr[i], i, arr)
    }
}