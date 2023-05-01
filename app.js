/* 

Типи данных:  
1) числа
2) строки: '' или ""(то же что и одинарные кавычки) или ``(интерполяция)
  - пустая строка '' обычно используется чтобы постепенно доклеить в нее части во время выполнения программы
3) булевый тип: true / false
  - сравнение чисел: 
    === (строго ли равны условия), 
    !== (строго ли неравныы условия), ! - это оператор логического отрицания
    > (значение слева больше чем значение справа), в JS маленькие буквы больше больших ('a' > 'Y' будет true)
    < (значение справа больше чем значение слева), 
    >= (значение слева больше или равно значению справа), 
    <= (значение справа больше или равно значению слева)
    && (это логическое AND  - если нужно проверить что все условия выполняются). Приоритет && выше чем ||
    || (это логическое OR  - если нужно проверить что выполняется хотя бы одно из условий)
    Обьединение условий:
      const isWarm = isRed || isOrange || isYellow;
      const canBuy = isAdult && hasEnoughMoney && isProductAvailable;

      if (isAdult && hasEnoughMoney) {
      console.log('Ти можеш купити алкоголь');}

      if (hasEnoughCash || hasCreditLimit) {
      console.log('Ти можеш купити цукерки');}

4) null: это ничего. Можно присвоить переменной если нужно удалить ее старое значение.
  - typeof null - возвращает строку 'object'.
5) undefined: значение по умолчанию (до того как в переменную будет что-то записано)
  - typeof undefined - возвращает строку 'undefined'.

*/

/* Тернарный оператор (если условие age >= 18 выполнилось, то будет
выбрано то, что стоит после ? ('Дорослий'), иначе будет выполнено
то, что стоит после ('Не дорослий') */
let age1 = 23;
const result = age1 >= 18 ? 'Дорослий' : 'Не дорослий';

console.log(result); // 'Дорослий'
console.log('---------------------------');


/* 
Сокращенные присвоения:
age -= 5; // age = age - 5;
age += 5; // age = age + 5;
age *= 5; // age = age * 5;
age /= 5; // age = age / 5;
age %= 5; // age = age % 5;
age++; // age += 1; // age = age + 1 (++ это инкремент)
age--; // age -= 1; // age = age - 1 (-- это декремент)
*/


/* Для проверки одного условия используем конструкцию if.
Если нужно проверить несколько условий, то можно использовать
if в середине другого if. Конструкция else используется если
нужно выполнить разные команды в зависимости от того истинное 
условие  */
const amount = 15;
const cookiePrice = 7;
const candiePrice = 8;
const totalPrice = cookiePrice + candiePrice;

console.log(totalPrice);

if (amount >= totalPrice) {
  console.log('I have enough money');
} else {
  console.log('I do not have enough money');
}
console.log('---------------------------');


/**/
const myName = 'Serhii';
let myAge = 36;
let wife = 'Natasha';
const isMarried = wife !== undefined;

console.log(myName, typeof myName);
console.log(myAge, typeof myAge);
console.log(isMarried, typeof isMarried);
console.log(typeof(1 + 2));

let division = 11 / 5; // ділення
console.log(division); // 2
console.log('---------------------------');


/**/
printRectInfo(5, 7);

function printRectInfo(a, b) {
  const perimeter = 2 * a * 2 * b;
  const square = a * b;

  console.log('---------------------------');
  console.log(`Rectangle ${a} x ${b}`);
  console.log(`Perimeter is ${perimeter}`);
  console.log(`Square is ${square}`);
  console.log('---------------------------');
}

printRectInfo(3, 10);
console.log('---------------------------');


/**/
function buildHouse(numberOfFloors, color = 'white') {
  const house = `${color} ${numberOfFloors}-floors house`;
  
  return house
}

const smallHouse = buildHouse(2);
const bigHouse = buildHouse(9, 'green');

console.log(smallHouse);
console.log(bigHouse);
console.log('---------------------------');

/**/
function greeter(name, partOfTheDay) {
  console.log(name, partOfTheDay);
  return '';
}
console.log('---------------------------');


/**/
let userName1 = 'Misha';

if (userName1) { //якщо ім'я не нал і не андефайнд
  console.log(`Hello, ${userName1}!`);
}
console.log('---------------------------');

/**/
let userName2 = 'Misha';

if (!userName2) { //якщо немає значення то код виконується
  console.log(`Hello, ${userName2}!`);
}
console.log('---------------------------');

/**/
const age = 25;
let title = (age < 18)
  ? 'Child'
  : 'Adult'; //теж саме що і нижче

// if (age < 18) {
//   title = 'Child';
// } else {
//   title = 'Adult';
// }

console.log(title);
console.log('---------------------------');

/**/
let myAge2 = 0;

myAge2 += 1; // це те саме що і: ageMy +1
console.log(`I am ${myAge2}`)

myAge2 ++; // це те саме що і: ageMy +1 або +=1
console.log(`I am ${myAge2}`)
console.log('---------------------------');

/**/
for (let myAge3 = 1; myAge3 <= 10; myAge3 ++) {
  console.log(`I am ${myAge3}`);
}
console.log('---------------------------');

/**/
const n = 4;
let sum = 0;

//debugger;
for (let i = 1; i <= n; i++) {
  sum += i;
  console.log(`i = ${i}`);
}
console.log(`sum = ${sum}`);
console.log('---------------------------');

/* Узнаем длинну строки (количество символов) */
const fullName = 'Serhii Udod';
console.log(fullName.length);
console.log('---------------------------');


/* Получение отдельного символа в строке по его индексу*/
const fullName2 = 'Serhii Udod';
console.log(
  fullName2[0], //'S'
  fullName2[1], //'e'
  fullName2[2], //'r'
  fullName2[3],
  fullName2[4],
  fullName2[5],
  fullName2[6],
  fullName2[7],
  fullName2[8],
  fullName2[9],
  fullName2[10],
  );
  console.log('---------------------------');


/* Индекс последнего символа на 1 меньше за длинну строки */ 
  const fullName3 = 'Serhii Udod';
  console.log(fullName3[fullName3.length - 1]);
  console.log('---------------------------');


/* Получение символа по несуществующему индексу: рез-т undefined */
const name1 = 'Serhii'
for (let i = 0; i < name1.length; i++) {
  console.log(name1[i]);
}
console.log('---------------------------');


/* Перебор всех символов в строке циклом for */
const text = 'My name is Serhii Udod';
let spaceCount = 0;

for (let i = 0; i < text.length; i++) {
  if (text[i] === ' ') {
    spaceCount++;
  }
}

console.log(spaceCount);
console.log('---------------------------');


/* Подсчет количества символов в строке с помощью цикла for */
const text2 = 'My name is Serhiy';
let result2 = '';

for (let i = 0; i < text2.length; i++) {
  if (text2[i] === ' ') {
    result2 = result2 + '---';
    //result2 += '---';
  } else {
    result2 = result2 + text2[i];
  }
}

console.log(result2);
console.log('---------------------------');


/* перебор символов в строке циклом for of */
const name3 = 'Misha';

for (const letter of name3) {
  console.log(letter);
//На каждом шаге в переменную letter записывается 
//очередной символ строки name3
}
console.log('---------------------------');


/* Создание новой строки и заполнение ее нужными сымволами */
const text3 = 'My name is Serhiy';
let result3 = '';

for (let i = 0; i < text3.length; i++) {
  if (text3[i] !== ' ') {
    result3 += text3[i];
  }
}

console.log(result3);
console.log('---------------------------');


/* Получение подстроки (части строки) методом slice() */
const text4 = '0123456789';

console.log(
  text4.slice(0, 3),
  text4.slice(1, 5),
  text4.slice(5, 1),
  text4.slice(),
  text4.slice(3),
  text4.slice(12),
  text4.slice(-5, -2),
  text4.slice(-3),
  text4.slice(1, -1),
);
console.log('---------------------------');


/* Сбор новой строки из частей методом slice() */
const text5 = 'I have 4 dogs';
console.log(text5);

const text6 = text5.slice(0, 7) + 'five' + text5.slice(-5);
console.log(text6);

const text7 = `We don't ${text5.slice(2, 6)} ${text5.slice(-4)}`;
console.log(text7);
console.log('---------------------------');


/* Проверка содержит ли строка нужный символ  или подстроку
методом includes()*/
const nameMy = 'Serhiy';
console.log(
  nameMy.includes('M'),
  nameMy.includes('s'),
  nameMy.includes('S'),
  nameMy.includes('Ser'),
  nameMy.includes('iy'),
);
console.log('---------------------------');


/* Поиск методом includes() с определенного индекса */
const word = 'abrakadabra';

console.log(
  word.includes('k'), // true
  word.includes('k', 5), // false
  word.includes('b', 15), // false
  word.includes('b', -1), // true
  word.includes('b', -100), // true
);
console.log('---------------------------');


/* Возврат новой строки в верхем или нижнем регистре
мтодами toUpperCase() и toLowerCase() */
const name = 'Serhiy';

console.log(
  name.toLowerCase(), // 'serhiy'
  name.toUpperCase(), // 'SERHIY'

  name[0].toLowerCase(), // 's'
  name[0].toUpperCase(), // 'S'
);
console.log('---------------------------');


/* Проверка является ли символ буквой */
function isLetter(ch) {
  return ch.toLowerCase() !== ch.toUpperCase();
}

console.log(
  isLetter('a'), // true
  isLetter('B'), // true
  isLetter('1'), // false
  isLetter(','), // false
  isLetter(' '), // false
);
console.log('---------------------------');


/* Проверка является ли буква большой */
function isBigLetter(ch) {
  return ch !== ch.toLowerCase();
}

console.log(
  isBigLetter('A'), // true
  isBigLetter('a'), // false
  isBigLetter('1'), // false
  isBigLetter(','), // false
  isBigLetter(' '), // false
);
console.log('---------------------------');


/* Регистронезависимый поиск.
Приведение строки и подстроки к одному регистру */
function search(text, part) {
  const normalizedText = text.toLowerCase();
  const normalizedPart = part.toLowerCase();
  
  return normalizedText.includes(normalizedPart);
}

console.log(
  search('Misha', 'm'), // true
  search('Misha', 'SHA'), // true
);
console.log('---------------------------');


/* Опеределение начинается ли строка с определенной
подстроки методом startsWith() и оканчивается ли строка 
какой-то подстрокой с помощью метода endsWith() */
const name8 = 'Misha';

console.log(
  name8.startsWith('Mis'), // true
  name8.startsWith('Misha'), // true
  name8.startsWith('M'), // true
  
  name8.startsWith('is'), // false
  name8.startsWith('a'), // false
);

console.log(
  name8.endsWith('a'), // true
  name8.endsWith('sha'), // true
  name8.endsWith('Misha'), // true

  name8.endsWith('is'), // false
  name8.endsWith('Mi'), // false
);
console.log('---------------------------');


/* Удаление пробелов спомощью метода trim() */
const name9 = '       Misha';
const fullName9 = 'Misha Hrynko      ';
const word9 = '     abrakadabra     ';

console.log(
  name9.trim(), // 'Misha'
  fullName9.trim(), // 'Misha Hrynko'
  word9.trim(), // 'abrakadabra'
);

console.log('---------------------------');


/* Удаление пробелов вначале строки спомощью метода trimStart() */
const greeting = '   Hello world!   ';

console.log(greeting);
// Expected output: "   Hello world!   ";

console.log(greeting.trimStart());
// Expected output: "Hello world!   ";
console.log(greeting.length); // 18
console.log('---------------------------');


/* Удаление пробелов вконце строки спомощью метода trimEnd() */
const greeting2 = '   Hello world!   ';

console.log(greeting2);
// Expected output: "   Hello world!   ";

console.log(greeting2.trimEnd());
// Expected output: "   Hello world!";
console.log('---------------------------');


/* Возврат новой строки с одним, несколькими или всеми совпадениями
методом replace(). Исходная строка остается неизменной. */
const p = 'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?';
console.log(p.replace('dog', 'monkey'));
// Expected output: "The quick brown fox jumps over the lazy monkey. 
// If the dog reacted, was it really lazy?"

const regex = 'dog';
console.log(p.replace(regex, 'ferret'));
// Expected output: "The quick brown fox jumps over the lazy ferret. 
// If the dog reacted, was it really lazy?"
console.log('---------------------------');


/* Возврат новой строки в которой ВСЕ совпадения заменены с
помощью метода replaceAll(). Исходная строка остается неизменной */
const p2 = 'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?';

console.log(p2.replaceAll('dog', 'monkey'));
// Expected output: "The quick brown fox jumps over the lazy monkey. If the monkey reacted, was it really lazy?"

// Global flag required when calling replaceAll with regex
const regex2 = 'dog';
console.log(p2.replaceAll(regex2, 'ferret'));
// Expected output: "The quick brown fox jumps over the lazy ferret. If the ferret reacted, was it really lazy?"
console.log('---------------------------');


/* Поиск индекса где в строке впервые встречается 
символ или подстрока с помощью метода indexOf().
Если не находит, то вернется -1 */
const name10 = 'My name is Misha';

console.log(
  name10.indexOf('y'), // 1
  name10.indexOf('n'), // 3
  name10.indexOf('My'), // 0

  // символ не знайдений
  name10.indexOf('x'), // -1

  // регістр має значення
  name10.indexOf('my'), // -1
  
  // індекс першого входження
  name10.indexOf('M'), // 0
  name10.indexOf('a'), // 4
  name10.indexOf(' '), // 2
  
  // маленька літера 'm' стоїть шостою
  name10.indexOf('m'), // 5
);
console.log('---------------------------');


/* Поиск индекса с определенного места методом indexOf() */
const name11 = 'My name is Misha';

console.log(
  name11.indexOf('M'), // 0
  name11.indexOf('M', 1), // 11
  
  // 'M' не трапляється, починаючи з 12 індекса
  name11.indexOf('M', 12), // -1
);
console.log('---------------------------');


/* Поиск индекса в обратном порядке методом lastIndexOf() */
const name12 = 'My name is Misha';

console.log(
  name12.lastIndexOf('y'), // 1
  name12.lastIndexOf('M'), // 11
  
  // можна вказати індекс, з якого 
  //починається пошук у зворотній бік
  name12.lastIndexOf('M', 10), // 0
);
console.log('---------------------------');


/* Преобразование числа в строку несколькими методами */
const nn = -123;

console.log(
  String(nn), // '-123'
  nn.toString(), // '-123'
  `${nn}`, // '-123'
  '' + nn, // '-123'
);
console.log('---------------------------');


/* Получение отдельной цифры числа */
function getFirstDigit(n) {
  return String(n)[0];
}

console.log(
  getFirstDigit(123), // '1'
  getFirstDigit(76543), // '7'
  getFirstDigit(0), // '0'
);
console.log('---------------------------');


/* Преобразование строки в число несколькими методами*/
const digits = '123';

console.log(
  Number(digits), // 123
  +digits, // 123
);
console.log('---------------------------');


/* Возврат последнего символа заданной строки */
function returnLast(arr) {
  return arr.at(-1);
}

let invoiceRef = "myinvoice01";

console.log(`Original string: "${invoiceRef}"`);
console.log(returnLast(invoiceRef)); // '1'

invoiceRef = "myinvoice02";

console.log(returnLast(invoiceRef)); // '2'
console.log('---------------------------');


/* Три метода использования свойства длинны */
const myString = "Every green bus drives fast.";

// Using length property and charAt() method
const lengthWay = myString.charAt(myString.length - 2);
console.log(lengthWay); // 't'

// Using slice() method
const sliceWay = myString.slice(-2, -1);
console.log(sliceWay); // 't'

// Using at() method  
const atWay = myString.at(-2);
console.log(atWay); // 't'
console.log('---------------------------');


/* Удаление пробелов  */




















