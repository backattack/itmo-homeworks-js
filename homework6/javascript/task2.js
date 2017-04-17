// Задача №2
// Одномерным массивом задана доска 3 на 3
// var area = [ null, null, null, null, null, null, null, null, null ]
// Необходимо сформировать игровое поле, состоящее из квадратов для крестиков-ноликов в HTML.
// При появлении в массиве 0-ля рисовать нолик , 1-цы крестик.
// Пример:  [ 1, null, 0, null, 1, null, null, null, null ] на поле 2-а крестика, и 1-н нолик.
// Для вывода html поля использовать document.write(). Код генерации html поля
// вынести в отдельную функцию в отдельный подключаемый js модуль.

var arr = [1, null, 1, null, 1, null, 0, 0, null];

function choose (main) {
    if (main === 1) {
        return 'X';
    } else if (main === 0) {
        return '0';
    } else
        return null;
    }
;

window.ticTacToe = function() {
    var str = '<table><tbody>';
    for (var i = 0; i < 3; i++) {
        str = str + '<tr>';
        for (var j = 0; j < 3; j++) {
            str = str + '<td>' + choose (arr[i * 3 + j]) + '</td>';
        };
        str = str + '</tr>';
    };
    str = str + '</tbody></table>';
    return str;
};

var html = ticTacToe();
document.write(html);
