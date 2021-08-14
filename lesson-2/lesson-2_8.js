// Задание 8
// * С помощью рекурсии организовать функцию возведения числа в степень. Формат: function power(val, pow), где val — заданное число, pow — степень.

console.log('Урок 2. Задание 8');


function power(val, pow) {
    if (pow === 0) return 1;
    else if (pow > 0) return val * power(val, pow - 1);
    else return 1/val * power(val, pow + 1);
}

console.log(power(5, 5));
console.log(power(2, -3));
