'use strict'
// Задача №1
// Создать шаблон объектов «Товар».
// Свойства товара «Имя» и «Цена».
// Создать шаблон объектов «Корзина товаров».
// Приватные свойства объекта:
// - Массив товаров;
// - Количество товаров;
// - Сумма товаров.
// Методы объекта:
// - Добавить товар;
// - Вернуть сумму товара;
// - Вернуть количество товара.

function product(name, price) {
    this.name = name;
    this.price = price;
};

var basket = {
    products: [],
    sum: 0,
    qty: 0,
    addProduct: function(name, price) {
        var x = new product(name, price);
        this.products.push(x);
    },
    addSum: function() {
        for (var i = 0; i < this.products.length; i++) {
            this.sum = this.products[i].price + this.sum;
        }
        return this.sum;
    },
    addQty: function() {
        this.qty = this.products.length;
        return this.qty;
    }
};

basket.addProduct("Shirts", 112);
basket.addProduct("Pants", 999);
basket.addProduct("Jackets", 157);
console.log("Sum = " + basket.addSum());
console.log("Qty = " + basket.addQty());
