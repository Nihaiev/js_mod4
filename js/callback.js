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



