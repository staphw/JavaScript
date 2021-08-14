// Задание 5
// Реализовать четыре основные арифметические операции в виде функций с двумя параметрами. Обязательно использовать оператор return.

console.log('Урок 2. Задание 5');

function add(a, b) {
    return `${a} + ${b} = ${a + b}`;
}

function sub(a, b) {
    return `${a} - ${b} = ${a - b}`;
}

function mult(a, b) {
    return `${a} * ${b} = ${a * b}`;
}

function div(a, b) {
    if (b === 0) return 'Error! Divizion by zero!';
    return `${a} / ${b} = ${a / b}`;
}

console.log(add(4, 5));
console.log(sub(4, 5));
console.log(mult(4, 5));
console.log(div(4, 5));
console.log(div(4, 0));
