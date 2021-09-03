// Задание 1
// 1. Написать функцию, преобразующую число в объект. Передавая на вход число от 0 до 999, мы должны получить на выходе объект, в котором в соответствующих свойствах описаны единицы, десятки и сотни. Например, для числа 245 мы должны получить следующий объект: {‘единицы’: 5, ‘десятки’: 4, ‘сотни’: 2}. Если число превышает 999, необходимо выдать соответствующее сообщение с помощью console.log и вернуть пустой объект.

console.log('Урок 4. Задание 1');


function createObject(number) {
    let obj = {};
    
    if (number < 0 | number > 999 | typeof(number) != 'number') {
        console.log('Error! Incorrect input!');
    }
    else {
        let i = 0;
        do {
            num = number % 10;
            number = Math.floor(number / 10);
            
            switch (i++) {
                case 0: {
                    obj.ones = num;
                    break;
                }
                case 1: {
                    obj.tens = num;
                    break;
                }
                case 2: {
                    obj.hundreds = num;
                    break;
                }
            }
            
        } while (number !== 0);
    }

    return obj;
}


console.log(createObject(534));
console.log(createObject(25));
console.log(createObject(0));
console.log(createObject(1000));
console.log(createObject(-1));
console.log(createObject('not number'));
