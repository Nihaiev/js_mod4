 /**
  * Функція зворотнього виклику (calback)
  *  - Функція може приймати інші функції як параметр
  *  - Функція яка передається іншій функції як аргумент, називається
  *  "функцією зворотнього (відкладеного) виклику" callback - функція
  *  - функція яка приймає інші функції як параметр або повертає
  *  функцію як результат своєї роботи називається "функцією вищого порядку" 
  */

// const fnA = function (message, callback) {
//     console.log(message);
//     console.log(callback);
// }
// const fnB = function () {
//     console.log('Лог виклику fnB');
    
// }
 
// fnA('Лог виклику fnA', fnB)

/**
 * функція зроби математику doMath (a,b, callback)
 * 
 */

const doMath = function (a, b, callback) {
    const result = callback(a, b)
    console.log(result);
}
//літерал функції
// doMath(2, 3, function (x, y) { //інлайн функція (анонімна функція)
//     return x + y;
// })
// doMath(10,8, function (x, y) {
//     return x - y;
// })

//відклаженний виклик: реєстрація подій

/**
 * З допомогою document.querySelector ми можемо отримати посилання на якийсь елемаент нашого html
 */
const buttonRef = document.querySelector('.js-button')
const handleBtnClick = function () {
    console.log('Клік по кнопці ' + Date.now());
    
}

//добавляємо слухач події 
buttonRef.addEventListener('click', handleBtnClick )