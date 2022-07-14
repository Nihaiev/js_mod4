/**
 * Замикання 
 * 
 * Функція може іншу функція в себе отримувати як елемент. 
 * А ще функція моще повернути із себе ішну функцію  
 */

const fnA = function (parameter) {
    const innerVariable = 'Значення внутрішної змінної функції fnA';

    const innerFunction = function () {
        console.log('ЦЕ виклик innerFunction ');
    }
    return innerFunction;
}

// const fnB = fnA();

// console.log(fnB);


/**Поваренок
 * 
 */

const makeDish = function (sheffName, dish) {
    console.log(`${sheffName} готовит ${dish}`);
};

makeDish('Mango', 'пирожок');
makeDish('Mango', 'омлет');
makeDish('Mango', 'чай');

makeDish('Poly', 'котлеты');
makeDish('Poly', 'супик');
makeDish('Poly', 'кофе');

const makeSheff = function (name) {
    const innverVar = 555;
    const message = 'hello';

    const makeDish = function (dish) {
        console.log(message);
        console.log(innverVar);
        console.log(`${name} готовит ${dish}`);
    };

    return makeDish;
};

const mango = makeSheff('Mango');

console.dir(mango);

mango('котлеты');
mango('пирожок');

const poly = makeSheff('Poly');

console.dir(poly);

poly('чай');
poly('омлет');

console.dir(mango);