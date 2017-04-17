// Задача №1
// Задан числовой массив: [2,3,7,13,5,0,20]
// Найти (мин, макс) значение в массиве, найти среднее, удалить первый и последний элемент

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
