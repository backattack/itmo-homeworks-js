// Задача №2
// Есть три вершины. Координаты X, Y, Z заданы как целые числа
// Нужно определить - является ли треугольник с заданными координатами прямоугольным

var ax, ay, bx, by, cx, cy, a, b, c;
ax = prompt('Введите X для вершины A');
ay = prompt('Введите Y для вершины A');
bx = prompt('Введите X для вершины B');
by = prompt('Введите Y для вершины B');
cx = prompt('Введите X для вершины C');
cy = prompt('Введите Y для вершины C');
a = Math.round(Math.sqrt((bx - ax) + (by - ay)));
console.log('Сторона A равна = ', a);
b = Math.round(Math.sqrt((cx - bx) + (cy - by)));
console.log('Сторона B равна = ', b);
c = Math.round(Math.sqrt((cx - ax) + (cy - ay)));
console.log('Сторона C равна = ', c);
if (a + b === c || a + c === b || b + c === a) {
    console.log('Ваш треугольник прямоугольный');
} else {
    console.log('Не тот треугольник!');
}
