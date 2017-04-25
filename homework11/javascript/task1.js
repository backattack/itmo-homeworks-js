// Задача №1
// Даны два прямоугольника в виде объектов.
// Написать функцию, которая проверяет
// пересекаются ли два прямоугольника.


window.onload = function () {

    var box1 = document.getElementById("box1");

    var box2 = document.getElementById("box2");

    function Collision(obj1, obj2) {
        return (obj1.offsetLeft <= obj2.offsetLeft + obj2.offsetWidth && obj1.offsetLeft + obj1.offsetWidth >= obj2.offsetLeft && obj1.offsetTop + obj1.offsetHeight >= obj2.offsetTop && obj1.offsetTop <= obj2.offsetTop + obj2.offsetHeight);
    }

    function move() {
        if (!Collision(box1, box2)) {
            setTimeout(function () {
                box2.style.top = box2.offsetTop - 5 + "px";
                move();
            }, 50);
        } else {
            box1.parentNode.removeChild(box1);
            box2.parentNode.removeChild(box2);
        }
    }
    move();
}
