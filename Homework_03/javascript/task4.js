// Задача №4
// Написать функцию, которая возвращает новую функцию,
// которая увеличивает/уменьшает переданное число на указанный при карировании шаг

var x = parseInt(prompt("введите число"));
var y = parseInt(prompt("введите шаг"));

function summ(x, y) {
    return function step(y) {
        var z = x + y;
        console.log(z)
    }
}
summ(x)(y);
