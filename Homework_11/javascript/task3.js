// Задача №3
// Задача повышенной сложности: 
// Изобразить клавиатуру и расположенные на ней клавиши
// в виде html документа. При нажатии клавиши пользователем
// на клавиатуре, подсвечивать нажатую клавишу на клавиатуре
// изображенной в html.

window.onload = function () {

    var box1 = document.getElementsByClassName('key1');
    var box2 = document.getElementsByClassName('key2');
    var box3 = document.getElementsByClassName('key3');

    document.addEventListener('keydown', function (event) {
        if (event.keyCode === 81) {
            box1[0].style.background = 'red';
        } else if (event.keyCode === 65) {
            box2[0].style.background = 'red';
        } else if (event.keyCode === 90) {
            box3[0].style.background = 'red';
        }
    });
};
