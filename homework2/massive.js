'use strict'

//Задан числовой массив (2,3,7,13,5,0,20);
//№1 Найти минимальное и максимальное значение в массиве;
//№2 Найти среднее всех элементов массива;
//№3 удалить первый и последний элементы;


/* Задача №1
var massive = [2,3,7,13,5,0,20];
console.log(massive);
var min;
var max;
min = massive['0'];
max = min;
for (var i = 0; i < massive.length; ++i) {
if (massive[i]>max) max = massive[i]
if (massive[i]<min) min = massive[i]
}
console.log(max);
console.log(min);
*/

/* Задача №2
var sum = 0;
for (var i = 0; i < massive.length; i++) {
    sum = parseInt(sum) + parseInt(massive[i])
}
var middle = sum/massive.length
console.log(middle);
*/
/* Задача №3
var a = massive.pop();
var b = massive.shift();
console.log(massive);
*/

/* Задача. Создать массив из чисел. Выполнить сортировку массива по возрастанию методом пузырька.

var massive = [3, 0, 5, 11, 43, 23, 453, 999, 99];
console.log(massive);
for (var a = 0; a < massive.length; a++) {
    for (var b = 0; b < massive.length; b++) {
        if (massive[b] > massive[b + 1]) {
            var max = massive[b];
            massive[b] = massive[b + 1];
            massive[b + 1] = max;
        }
    }
}
console.log(massive);
*/

alert('Введите координаты треугольника');
var a, b, c;
a = prompt('Введите координаты для вершины A');
b = prompt('Введите координаты для вершины B');
c = prompt('Введите координаты для вершины C');
if (true) {

}
