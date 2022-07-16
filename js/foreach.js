/*
 * Array.prototype.forEach(callback(currentValue, index, array), thisArg)
 * - Поэлементо перебирает оригинальный массив
 * - Ничего не возвращает
 * - Заменяет классический for, если не нужно прерывать цикл
 *  У forEach є 2 аргументи? 1.callback 2. обєкт thisArg в контексті якому буде викликатись цей callback(currentValue, index, array)
 */

const numbers = [5, 10, 15, 20, 25];

numbers.forEach(function (number, index, array) {
    
})