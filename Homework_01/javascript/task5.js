// Задача №5
// Проверить истинность высказывания:
// ‘Среди трех данных целых чисел есть хоть бы одна пара совпадающих".

var a, b, c;
a = prompt('Введите первое число');
b = prompt('Введите второе число');
с = prompt('Введите третье число');
if (a === b || a === c || b === c) {
    document.write('Совпадение найдено!')
} else {
    document.write('Совпадение не найдено  :(')
}
