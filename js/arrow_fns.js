/**
 * Стрілкові функції
 *  - оголошення
 *  - Явне і неявне повернення
 *  - АРгументи
 *  - Неявне повернення обєкта
 */

const add = function (a, b, c) {
    console.log(a, b, c);
    return a + b + c;

}

//переписуємо цю же функцію на стрілкову

const addArrow = (a, b, c) => {
    console.log(a, b, c);
    return a + b + c;
}

const addArrow = (a, b, c) => a + b + c; // неявне повернення


console.log(add(5, 10, 15));