// Задание 2
// 2. Сделать генерацию корзины динамической: верстка корзины не должна находиться в HTML-структуре. Там должен быть только div, в который будет вставляться корзина, сгенерированная на базе JS:
// 2.1. Пустая корзина должна выводить строку «Корзина пуста»;
// 2.2. Наполненная должна выводить «В корзине: n товаров на сумму m рублей».

"use strict";

const products = {
    'product1': {
        name: 'product1',
        price: 700
    },
    'product2': {
        name: 'product2',
        price: 200
    },
    'product3': {
        name: 'product3',
        price: 400
    },
}

const cart = {
	products,
    productsInCart: {},
    basketPrice: 0,
    countProducts: 0,
    
    
    run() {
        this.basketInfo();
        this.addToCart('product1');
        this.addToCart('product1');
        this.removeFromCart('product1');
        this.addToCart('product2');
        this.removeFromCart('product2');
        this.addToCart('product3');
        this.addToCart('product2');
        this.removeFromCart('product1');
        this.removeFromCart('product2');
        this.removeFromCart('product3');
    },
    

    addToCart(product) {
        if (this.productsInCart[product] !== undefined) {
            this.productsInCart[product].quantity++;
        }
        else {
            this.productsInCart[product] = this.products[product];
            this.productsInCart[product].quantity = 1;
        }
        console.log(`${this.products[product].name} добавлен в козину`);
        this.countBasketPrice();
    },
    
    
    removeFromCart(product) {
        if (this.productsInCart[product] === undefined)
            return;
        else if (this.productsInCart[product].quantity === 1) {
            delete this.productsInCart[product];
        }
        else {
            this.productsInCart[product].quantity--;
        }
        console.log(`${this.products[product].name} удален из корзины`);
        this.countBasketPrice();
    },
    
    
    countBasketPrice() {
        this.countProducts = 0;
        this.basketPrice = 0;
        
        for (let product in this.productsInCart) {
            this.countProducts += this.productsInCart[product].quantity;
            this.basketPrice += this.productsInCart[product].quantity * this.productsInCart[product].price;
        }
        
        console.log(`В корзине ${this.countProducts} товаров ценою ${this.basketPrice} деревянных`);
        this.basketInfo();
    },
	
    // Закоментированный код для вывода на странице результата всех произведенных операций из метода run() с корзиной
    basketInfo() {
        let out = (this.countProducts === 0) ? 'Корзина пуста' : `Товаров в корзине: ${this.countProducts}; на сумму: ${this.basketPrice}`;
        let bskt = document.querySelector('.basket');
        bskt.innerHTML = out;
//        let out = document.createElement('div');
//        out.textContent = (this.countProducts === 0) ? 'Корзина пуста' : `Товаров в корзине: ${this.countProducts}; на сумму: ${this.basketPrice}`;
//        bskt.appendChild(out);
    },
};

cart.run();
