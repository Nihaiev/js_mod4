/**
 * Стрілкові функції
 *  - Оголошення
 * - Явне і неявне повернення
 * - Аргумент
 * - Неявне повернення обєкта
 */

const add = function (a, b, c) {
  console.log(a, b, c);
  return a + b + c;
};

// !якщо у нас параметр тільки 1 то скобки () можна пропустити
// якщо параметрів нема то скобки () повинні бути пусті

const addArrow = (a, b, c) => {
  console.log(a, b, c);
  return a + b + c;
};

console.log(add(5, 10, 15));

/**
 * !const addArrow = (a, b, c) => a + b + c; - це те що називається неявне повернення
 */

/**
 *?Підводні каменні
 */

const fnA = function () {
  return {
    a: 5,
  };
};

console.log(fnA());

const arrowFna = () => ({ arrowA: 5 }); //якщо ми із => хочему неявно повернути обєкт ми обертаємо його у вираз
console.log(arrowFna());
