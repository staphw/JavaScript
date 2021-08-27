// Задание 2
// 2.Продолжить работу с интернет-магазином:
// 2.1. В прошлом домашнем задании вы реализовали корзину на базе массивов. Какими объектами можно заменить их элементы?
// 2.2. Реализуйте такие объекты.
// 2.3. Перенести функционал подсчета корзины на объектно-ориентированную базу.

console.log('Урок 4. Задание 2');

function countBasketPrice(basket) {
    let basketPrice = 0;

    for (let product in basket) {
        basketPrice += basket[product].quantity * basket[product].price;
    }
        
    return basketPrice;
}

let basket = {
    product1: {
        quantity: 3,
        price: 700,
    },    
    product2: {
        quantity: 4,
        price: 200,
    },    
    product3: {
        quantity: 1,
        price: 400,
    },
}

console.log(countBasketPrice(basket));
