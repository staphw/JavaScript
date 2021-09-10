// Задание 1
// 1. Доработать модуль корзины.
// a. Добавлять в объект корзины выбранные товары по клику на кнопке «Купить» без перезагрузки страницы
// b. Привязать к событию покупки товара пересчет корзины и обновление ее внешнего вида

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
        this.init();
        this.basketInfo();
    },
    
    
    init() {
        let out = '';
        let catalog = document.querySelector('.catalog');
        for (let product in this.products) {
            out += `<div>\
                    ${this.products[product].name} ${this.products[product].price} \
                    <button id="${this.products[product].name}" onclick="cart.removeFromCart(id)">Удалить</button> \
                    <button id="${this.products[product].name}" onclick="cart.addToCart(id)">В корзину</button> \
                    </div>`
        }
        catalog.innerHTML = out;
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


    basketInfo() {
        let out = (this.countProducts === 0) ? 'Корзина пуста' : `Товаров в корзине: ${this.countProducts}; на сумму: ${this.basketPrice}`;
        let bskt = document.querySelector('.basket');
        bskt.innerHTML = out;
    },
};

cart.run();
