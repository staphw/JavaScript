// Задание 4
// 4. *Нарисовать пирамиду с 20 рядами с помощью console.log, как показано на рисунке:
// x
// xx
// xxx
// xxxx
// xxxxx

console.log('Урок 3. Задание 4');

const n = 20;
let xString = '';

for (let i = 1; i <= n; i++) {
    xString += 'x';
    console.log(xString);
}
