'use strict'
// Даны несколько div элементов на html. По первому нажатию на
// Задача №1
// каждый div он перекрашивается зеленым цветом, при повторном
// нажатии перекрашивается обратно и так далее каждый клик
// происходит чередование цвета.

window.onload = function() {

    var firstDiv = document.getElementById('obj1');

    firstDiv.onclick = function() {
        switch (this.style.backgroundColor) {
            case "purple":
                this.style.backgroundColor = "green"
                this.style.color = "white"
                break;
            case "green":
                this.style.backgroundColor = "purple"
                this.style.color = "black"
                break;
        };
    };

}
