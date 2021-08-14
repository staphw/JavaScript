// Задание 7
// * Сравнить null и 0. Объяснить результат

console.log('Урок 2. Задание 7');

// Сравнение 1
console.log(null == 0);                 // false
console.log(null === 0);                // false
console.log(null != 0);                 // true
console.log(null !== 0);                // true
console.log(null > 0);                  // false
console.log(null < 0);                  // false
console.log(null >= 0);                 // true
console.log(null <= 0);                 // true

console.log(typeof(null));              // object
console.log(typeof(0));                 // number

console.log(Boolean(null));             // false
console.log(Boolean(0));                // false

console.log(Number(null));              // 0

// Сравнение 2
console.log(Number(null) == 0);         // true
console.log(Number(null) === 0);        // true
console.log(Number(null) != 0);         // false
console.log(Number(null) !== 0);        // false
console.log(Number(null) > 0);          // false
console.log(Number(null) < 0);          // false
console.log(Number(null) >= 0);         // true
console.log(Number(null) <= 0);         // true

// Сравнение 3
console.log(null == Number(null));      // false
console.log(null === Number(null));     // false
console.log(null != Number(null));      // true
console.log(null !== Number(null));     // true
console.log(null > Number(null));       // false
console.log(null < Number(null));       // false
console.log(null >= Number(null));      // true
console.log(null <= Number(null));      // true

// При явном приведении null к числу получаем 0, соответственно сравнение с 0 выдает результаты, которые и должны быть при сравнении чисел (сравнение 2):
//  - true при равенстве, строгом равенсве, больше или равно и меньше или равно.
//  - false при неравенстве, строгом неравенсве, больше и меньше
// Булевы занчения null и 0 однинаковы - false
// При сравнении null, явно неприведенного к числу (сравнение 1), с 0, результаты следующие:
//  - true при неравенстве, строгом неравенсве, больше или равно и меньше или равно.
//  - false при равенстве, строгом равенсве, больше и меньше
// Получая true при больше или равно и меньше или равно, мы должны, по идее, также получить true при равенсве, больше и меньше, однако мы получаем false во всех трех случаях.
// Такие же результаты получаются при сравнении null и null, приведенного к числу (сравнение 3).
// Если сравнивать результаты Сравнения 1 и Сравнения 2, то получим одинаковые результаты при операциях больше, меньше, больше или равно и меньше или равно и разные при операциях равенство, строгое равенство, неравенство, строгое неравенство.
// Получается, что операторы больше, меньше, больше или равно и меньше или равно приводят null к числовому значению, а операторы равенства, строгого равенства, неравенства, строгого неравенства - нет.