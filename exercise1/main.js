'use script'
/*

Задача №1

var a, b, с;
a = prompt('Введите переменную (a)');
b = prompt('Введите переменную (b)');
c = prompt('Введите переменную (c)');
if (a, b, c) {
    document.write('Минимальное значение равно = ', Math.min(a, b, c));
} else
    document.write('Ошибка ввода');

*/
/*

Задача №2

var a = parseInt(prompt('Введите целое число -> от -999 до 999'));
if ((a <= '9') && (a >= '1')) {
    document.write('Положительное однозначное число');
} else if ((a >= '10') && (a <= '99')) {
    document.write('Положительное двухзначное число');
} else if ((a >= '100') && (a <= '999')) {
    document.write('Положительное трехзначное число');
} else if ((a >= '-9') && (a <= '-1')) {
    document.write('Отрицательное однозначное число');
} else if ((a >= '-99') && (a <= '-10')) {
    document.write('Отрицательное двухзначное число');
} else if ((a >= '-999') && (a <= '-100')) {
    document.write('Отрицательное трехзначное число');
} else if (a = '0') {
    document.write('Число равно нулю');
} else {
    document.write('Ошибка ввода');
}
*/
/*

Задача №3

var a;
a = prompt('Введите целое число от 0 до 9')
switch (a) {
    case '0':
        document.write('0 -> ноль')
        break;
    case '1':
        document.write('1 -> один')
        break;
    case '2':
        document.write('2 -> два')
        break;
    case '3':
        document.write('3 -> три')
        break;
    case '4':
        document.write('4 -> четыре')
        break;
    case '5':
        document.write('5 -> пять')
        break;
    case '6':
        document.write('6 -> шесть')
        break;
    case '7':
        document.write('7 -> семь')
        break;
    case '8':
        document.write('8 -> восемь')
        break;
    case '9':
        document.write('9 -> девять')
        break;
    default:
        document.write('Ошибка ввода')
}

*/
/*

Задача №4

var a;
a = prompt('Введите число -> от 1 до 5')
if (a === '1') {
    document.write('Плохо')
} else if (a === '2') {
    document.write('Неудовлетворительно')
} else if (a === '3') {
    document.write('Удовлетворительно')
} else if (a === '4') {
    document.write('Хорошо')
} else if (a === '5') {
    document.write('Отлично')
} else {
    document.write('Ошибка ввода')
}

*/
/*

Задача №5

var a, b, c;
a = prompt('Введите первое число');
b = prompt('Введите второе число');
с = prompt('Введите третье число');
if (a === b || a === c || b === c) {
    document.write('Совпадение найдено!')
} else {
    document.write('Совпадение не найдено  :(')
}

*/
