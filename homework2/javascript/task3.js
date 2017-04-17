// Задача №3
// Создать массив из чисел
// Выполнить сортировку массива по возрастанию методом пузырька
// Запрещено использовать стандартные методы

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
