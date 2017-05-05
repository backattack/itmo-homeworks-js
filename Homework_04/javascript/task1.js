// Задача №1
// Дана строка, изображающая целое число
// Вывести сумму цифр этого числа

var a = 0,
    b = prompt('Choose a integer!');
while (b) {
    var c = b % 10;
    a = a + c;
    b = (Math.abs(b) - Math.abs(c)) / 10;
}
console.log("Summ = " + Math.abs(a));
