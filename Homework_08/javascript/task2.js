'use strict'
// Задача №2
// Реализовать счётчик нажатий на кнопку: Дана кнопка внутри неё
// записана цифра. При клике на кнопку – её значение должно
// увеличиваться на единицу.

window.onload = function () {

var button = document.getElementById('button');

button.onclick = function() {
    if (!this.counter)
        this.counter = 0
    this.innerHTML = ++this.counter;
};

}
