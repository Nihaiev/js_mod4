Колбек-функції Функції не відрізняються від чисел, рядків або масивів - це
просто спеціальний тип даних (об'єкт вищого порядку), значення, яке можна
зберігати у змінній або передавати у якості аргументу в іншу функцію.

function greet(name) { return `Ласкаво просимо ${name}.`; }

// Викликаємо функцію greet і виводимо результат у консоль
console.log(greet("Манго")); // Ласкаво просимо Манго.

// Виводимо функцію greet у консоль, не викликаючи її console.log(greet); // ƒ
greet() { return `Ласкаво просимо ${name}.`; }

У першому лозі ми викликаємо функцію greet за допомогою круглих дужок, і в
консоль виводиться результат її виконання. У другому лозі передається посилання
на функцію, а не результат виклику (відсутні круглі дужки), тому в консоль
виводиться її тіло. Це означає, що функцію можна присвоїти у змінну або передати
як аргумент іншої функції.

Функція зворотного виклику (callback, колбек) - це функція, яка передається
іншій функції як аргумент, а та, в свою чергу, викликає передану функцію.

Функція вищого порядку (higher order function) - функція, яка приймає у якості
параметрів інші функції або повертає функцію у якості результату.

// Колбек-функція function greet(name) {
console.log(`Ласкаво просимо ${name}.`); }

// Функція вищого порядку function registerGuest(name, callback) {
console.log(`Реєструємо гостя ${name}.`); callback(name); }

registerGuest("Манго", greet);

Ми передали посилання на функцію greet як аргумент, тому вона буде присвоєна в
параметр callback і викликана всередині функції registerGuest за допомогою
круглих дужок. Ім'я параметра для колбека може бути довільним, головне
пам'ятати, що значенням буде функція.

Інлайн колбеки Якщо колбек-функція - маленька, і потрібна тільки для передачі
аргументом, її можна оголосити безпосередньо на момент виклику функції, в яку
передаємо колбек. Така функція буде доступна тільки у якості значення параметра
і більше ніде в коді.

function registerGuest(name, callback) {
console.log(`Реєструємо гостя ${name}.`); callback(name); }

// Передаємо інлайн функцію greet у якості колбека registerGuest("Манго",
function greet(name) { console.log(`Ласкаво просимо ${name}.`); });

// Передаємо інлайн функцію notify у якості колбека registerGuest("Полі",
function notify(name) {
console.log(`Шановний(а) ${name}, ваш номер буде готовий за 30 хвилин.`); });

Декілька колбеків Функція може приймати будь-яку кількість колбеків. Наприклад,
уявімо, що ми пишемо логіку прийняття дзвінків для телефону. Програма повинна
увімкнути автовідповідач, якщо абонент - недоступний, або з'єднати дзвінок в
іншому випадку. Доступність абонента будемо імітувати генератором випадкового
числа, щоб між різними викликами функції можна було отримати різні результати.

function processCall(recipient) { // Імітуємо доступність абонента випадковим
числом const isRecipientAvailable = Math.random() > 0.5;

if (!isRecipientAvailable) {
console.log(`Абонент ${recipient} недоступний, залиште повідомлення.`); //
Логіка активації автовідповідача } else {
console.log(`З'єднуємо з ${recipient}, очікуйте...`); // Логіка прийняття
дзвінка } }

processCall("Манго");

Проблема такого підходу полягає у тому, що функція processCall робить занадто
багато і прив'язує перевірку доступності абонента до двох заздалегідь визначених
дій. Що буде, якщо в майбутньому, замість автовідповідача, потрібно буде
залишати голограму?

Ми могли б написати функцію таким чином, щоб вона повертала якесь значення, і
потім за результатом її виконання, робити перевірки і виконувати потрібний код.
Але перевірки не стосуються зовнішнього коду і будуть його засмічувати.

Виконаємо рефакторинг функції таким чином, щоб вона приймала два колбеки
onAvailable і onNotAvailable, і викликала їх за умовою.

function processCall(recipient, onAvailable, onNotAvailable) { // Імітуємо
доступність абонента випадковим числом const isRecipientAvailable =
Math.random() > 0.5;

if (!isRecipientAvailable) { onNotAvailable(recipient); return; }

onAvailable(recipient); }

function takeCall(name) { console.log(`З'єднуємо з ${name}, очікуйте...`); //
Логіка прийняття дзвінка }

function activateAnsweringMachine(name) {
console.log(`Абонент ${name} недоступний, залиште повідомлення.`); // Логіка
активації автовідповідача }

function leaveHoloMessage(name) {
console.log(`Абонент ${name} недоступний, записуємо голограму.`); // Логіка
запису голограми }

processCall("Манго", takeCall, activateAnsweringMachine); processCall("Полі",
takeCall, leaveHoloMessage);

Колбеки застосовуються для обробки дій користувача на сторінці, на момент
обробки запитів на сервер, виконання заздалегідь невідомих функцій тощо. У цьому
і полягає їх суть - це функції, призначені для відкладеного виконання.

Абстрагування повторення Абстракція - приховування деталей реалізації. Дозволяє
думати про задачі на вищому (абстрактному) рівні. Функції - це хороший спосіб
побудови абстракцій.

Наприклад, скрипт виконує якусь дію певну кількість разів. З цією метою можна
написати цикл for.

for (let i = 0; i < 10; i += 1) { console.log(i); }

Чи можемо ми абстрагувати «робити щось N разів» у якості функції? - так,
напишемо функцію, яка викликає console.log() N разів.

function repeatLog(n) { for (let i = 0; i < n; i += 1) { console.log(i); } }

repeatLog(5);

Але що робити, якщо ми хочемо виконати щось, крім логування чисел? Оскільки
«робити щось» можна уявити функцією, а функції - це просто значення, ми можемо
передати дію як аргумент.

function printValue(value) { console.log(value); }

function prettyPrint(value) { console.log("Logging value: ", value); }

function repeat(n, action) { for (let i = 0; i < n; i += 1) { action(i); } }

// Передаємо printValue як callback-функцію repeat(3, printValue); // 0 // 1 //
2

// Передаємо prettyPrint як callback-функцію repeat(3, prettyPrint); // Logging
value: 0 // Logging value: 1 // Logging value: 2
