// Задание 6
// Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation), где arg1, arg2 — значения аргументов, operation — строка с названием операции. В зависимости от переданного значения выполнить одну из арифметических операций (использовать функции из пункта 5) и вернуть полученное значение (применить switch).

console.log('Урок 2. Задание 6');

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

function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case '+': {
            return add(arg1, arg2);
            break;
        }        
        case '-': {
            return sub(arg1, arg2);
            break;
        }        
        case '*': {
            return mult(arg1, arg2);
            break;
        }        
        case '/': {
            return div(arg1, arg2);
            break;
        }    
    }
}

console.log(mathOperation(4, 5, '+'));
console.log(mathOperation(4, 5, '-'));
console.log(mathOperation(4, 5, '*'));
console.log(mathOperation(4, 5, '/'));
console.log(mathOperation(4, 0, '/'));
