// Задача №3
// Дано целое число в диапазоне 0 - 9.
// Вывести строку - название соответствующей цифры на русском языке
// (0 - "ноль", 1 - "один", 2 - "два", ...).

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
