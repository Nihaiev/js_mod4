/**
 * CallBack функції, функції зворонього виклику 
 *   - Функція може приймати інші функції як параметри
 * - Функція яка передається іншій функції як аргумент називається 
 * "функцією зворотнього виклику" (callback функція) (fnB в прикладі)
 *  - Функція яка приймає іншу функцію як параметр або повертає
 *  функцію як результат своєї роботи, називається функцією вищого порядку
 * (fnA в прикладі - це функція вищого порядку)
 */

//! Example1
//callback - це просто назва змінної
// const fnA = function (message, callback) {
//     console.log(message);
//     console.log(callback);
//     callback(100); //Це лог при виклику fnB
// }
/**
 * В данний момент ми визначилифункцію fnB передали її в fnA  і записали аргумент в callback 
 * Тобто зараз в середині функції fnA при її виклику в параметрі callback лижить буквально посилання на функцію fnB 
 * і треба памятати що це просто посилання 
 */
// const fnB = function (number) {
//     console.log('Це лог при виклику fnB', number);
// }

// fnA('qwerty', fnB);

//! Example2

// const doMath = function (a, b, callback) {
//     const result = callback(a, b);
//     console.log(result);
    
// }

// const add = function (x, y) {
//     return x + y;
// }

// const sub = function (x, y) { //
//     return x - y;
// }

// doMath(2, 3, add);
// doMath(10, 8, sub);


/**
 * Обявили функцію add кинули її doMath(2, 3, add); аргументом 
 * записався в парметр callback, викликали callback, a, b докинулись як x, y
 * воно їх порахувало return x + y; і повернуло результат на місце виклику result
 * у змінну result буквально записався виклик add після чого ми його залогували console.log(result);
 */


// ЛІтерал функції

// const doMath = function (a, b, callback) {
//     const result = callback(a, b);
//     console.log(result);
    
// }

// doMath(2, 3, function (x, y) {
//     return x + y;
// }); // літерал фукції, ми просто взяли оголошення функції і передали як третій аргумент
// doMath(10, 8, function (x, y) {
//     return x - y;
// }); //  це називається інлайн функція


//! Example 3

/**
 * Як ми можемо виконати шматочок коду по умові або колись потім,
 * нам потрібно обирнути його у функцію із цього прийшли функції зворотнього виклику
 * тому що єдиний варіант завернути шматочок коду в перевикористовуваний контейнер - це функція
 * тому все у нас у виглядуі callback функцій
 */

/** з допомогою document.querySelector ми можемо отримати посилання
 * на якийсь елемент нашого html  js-button
 * і все що ми робимо це отримуємо посилання на цю кнопочку 
 *  */

// реєстрація події, перший usecase
// const buttonRef = document.querySelector('.js-button');
// // console.log(buttonRef);

// const handleBtnClisk = function () {
//     console.log('Клік по кнопці' + Date.now());
// }
// buttonRef.addEventListener('click', handleBtnClisk);

/**як написати код який відбудеться якось потім 
 * завернути його у функцію і зареєструвати його як callback
 *  */

// ?ми можемо зробити це Інлайново
// const buttonRef = document.querySelector('.js-button');
// // console.log(buttonRef);

// buttonRef.addEventListener('click', function () {
//     console.log('Клік по кнопці' + Date.now());});

//! Example 4

/**
 * отримання геопозиції користувача  
 */
/** у на на обєкті window є спеціальна властивість navigator
 * в якому є властивість geolocation
 * в якому є метод отримати поточну позицію getCurrentPosition();
 *  */
// const onGetPositionSuccess = function (position) {
//     console.log('Це виклик onGetPositionSuccess');
//     console.log(position);
// }
// const onGetPositionError = function (error) {
//     console.log('Це виклик onGetPositionError');
//     console.log(error);
// }
// window.navigator.geolocation.getCurrentPosition(onGetPositionSuccess, onGetPositionError);

//! Example 5

/**
 * Відкладений виклик: інтервали  
 * 
 * Ми будемо проходити асинхронний JS це коли можна виконувати відклаений код 
 * 
 */
/**
 * у нас є console.log і я б хотів зареєструвати функцію яка б виконалась 
 * через 2 секунди, для цього є спеціальна констукція setTimeout
 */

// const callback = function () {
//     console.log('Через 2 секунди в середині колбека в таймауті');
// }
// console.log('Перед таймаутом');
// setTimeout(callback, 2000);

// console.log('Після таймаута');


//! Example 6

/**
 * Рельний приклад по роботі з бекендом
 * 
 */
//https://pokeapi.co/api/v2/pokemon


// const onRequstSuccess = function (response) {
//     console.log(response);
    
// }
// fetch('https://pokeapi.co/api/v2/pokemon').then(res => res.json()).then(onRequstSuccess);


//! Example 7

/**
 * Функція Фільтр для фільтрації масиву 
 * 
 */

const filter = function (array, test) {
    const filterArray = [];
    for (const el of array) { // перебрали масив
        console.log(el);
        // console.log(test(el));
        const passed = test(el);
        if (passed) {
            filterArray.push(el)
        }
    }
    return filterArray;
}

//1. треба передати функцію
// 2. функція отримує елемент масиву
// 3. якщо елемент масиву відповідає умові то функція поверне true
// 4.якщо елемент масиву НЕ відповідає умові то функція поверне false

const callback1 = function (value) {
    return value >= 3;
}

const r1 = filter([1, 2, 3, 4, 5], callback1);
console.log(r1);
const r2 = filter([1, 2, 3, 4, 5, 6, 7, 8], function (value) {
    return value <= 4;
})
console.log(r2);


