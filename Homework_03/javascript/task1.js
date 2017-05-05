// Задача №1
// Напишите функцию, которая в зависимости от переданных в нее целочисленных аргументов
// "количество дней", будет выводить слово "день" в нужно форме

var arr = ['День', 'Дня', 'Дня'];
var xDay = prompt('Введите количетво дней');

function days(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (xDay < 10) {
            if (xDay == 1) {
                return arr[0];
            } else if (xDay < 5) {
                return arr[1];
            } else if (xDay >= 5) {
                return arr[2];
            }
        } else if (xDay < 100) {
            if (xDay % 10 == 1 && xDay != 11) {
                return arr[0];
            } else if (xDay % 10 < 5 && xDay > 20) {
                return arr[1];
            } else if (xDay % 10 >= 5 || xDay >= 10 && xDay <= 20) {
                return arr[2];
            }
        } else if (xDay < 1000) { // НЕ СДЕЛАНО
            if (xDay % 10 == 1 && xDay != 111 || xDay % 100 == 21) {
                return arr[0];
            } else if (xDay) {
                return arr[1];
            } else return arr[2];
        }
    }
}
console.log(xDay + ' ' + days(arr));
