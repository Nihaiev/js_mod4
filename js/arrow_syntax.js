/**
 * Синтаксис стрілкових функцій
 *  - з параметрами
 *  - з одним параметром
 *  - без параметрів 
 * 
 */

//звичайна функція
// const add = function (a, b) {
//     return a + b;
// };


// стрілкова функція, слово function замінили на =>
const add = (a, b) => {
    console.log(a,b);
};

// явне(explicit) неявне(emplicit) повернення return

const add = (a, b) => {
    console.log(a,b); // явне повернення 
};

const add = (a, b) => a+b // неявне повернення

// TODO 28
