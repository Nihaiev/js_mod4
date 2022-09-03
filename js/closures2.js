/**
 * !Замикання
 * Функція результатом своєї роботи може повертати іншу функцію
 *
 * - Функцію яку повернули під час виклику буде мати доступ до всіх локальних змінних(області видимості)
 * батьківської функції(тої із якої її повернули)
 * це називається замиканням
 */

const fnA = function (parameter) {
  const innerVariable = 'Значення внутрішньої змінної функції fnA';
  const innerFunction = function () {
    console.log(parameter);
    console.log(innerVariable);
    console.log('Це виклик функції innerFunction');
  };
  return innerFunction;
};

// const fnB = fnA(555);
// fnB;
// console.log(fnB);

// результатом роботи функції fnA повертаю функцію innerFunction

/**
 * !Повар
 */

const makeDish = function (sheffName, dish) {
  console.log(`${sheffName} make ${dish}`);
};

// makeDish('Mango', 'kebab');
// makeDish('Mango', 'omlet');
// makeDish('Mango', 'tea');

// makeDish('Poly', 'stake');
// makeDish('Poly', 'sup');
// makeDish('Poly', 'coffe');

const makeSheff = function (name) {
  const makeDish = function (dish) {
    console.log(`${name} make ${dish}`);
  };
  return makeDish;
};

const mango = makeSheff('Mango');

// mango('котлети');
// mango('пиріжок');

/**
 * Округлятор
 */

const floatingPoint = 3.456789;
const someint = Math.round(floatingPoint);
const withDecimals = Number(floatingPoint.toFixed(2));

// const rounder = function (number, places) {
//   return Number(number.toFixed(places));
// };
// console.log(rounder(3.4567, 2));

const rounder = function (places) {
  return function (number) {
    return Number(number.toFixed(places));
  };
};
const rounder2 = rounder(2);
const rounder3 = rounder(3);

// console.log(rounder2(3.4567));
// console.log(rounder3(3.4567));
// console.log(rounder2(3.1234));
// console.log(rounder3(3.4567));

/**
 * !Приватні данні і функції -скриті реалізаціїб інтерфейс
 */

const salaryManagerFactory = function (employeeName, baseSalary) {
  let salary = baseSalary;
  const changeBy = function (amount) {
    salary += amount;
  };
  return {
    raise(amount) {
      changeBy(amount);
    },
    lower(amount) {
      changeBy(amount);
    },
    current() {
      return `Поточна зарплата ${employeeName} - ${salary}`;
    },
  };
};

const myLibFactory = function () {
  let value = 0;
  return {
    add(num) {
      value += num;
    },
    getvalue() {
      return value;
    },
  };
};

const myLib = myLibFactory();

console.log(myLib);
