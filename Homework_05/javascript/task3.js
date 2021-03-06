// Задача №3
// Задан массив целых чисел. Написать функцию filter.
// Функция filter получает в качестве аргументов исходный
// массив и функцию предикат проверяющую является ли число
// отрицательным (предикат – функция, которая возвращает
// истину или ложь). Функция filter используя предикат
// позволяет сформировать и вернуть новый массив, в который
// вошли все отрицательные элементы исходного массива.  

var arr = [-5, 0, 5, 6, 7, 14, -4, -99, 345, -111];

function func(x) {
    return x < 0;
}

function filter(arr, predFunc) {
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
        if (predFunc(arr[i])) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}
console.log(filter(arr, func));
