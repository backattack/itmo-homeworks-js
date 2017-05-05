// Задача №3
// Библиотека должна обладать следующими методами:
// - поиск минимального элемента в переданном массиве;
// - поиск максимально элемента в переданном массиве;
// - расчет среднего арифметического значения элементов переданного массива;
// - создание копии (клонирование) переданного массива.

var module1 = (function() {
    return {
        minMax: function() {
            console.log(' Максимальное значение = ' + Math.max.apply(Math, arr) + ' Минимальное значение = ' + Math.min.apply(Math, arr));
        }
    }
}());
var module2 = (function() {
    return {
        mainArr: function() {
            var sum = 0;
            for (var i = 0; i < arr.length; i++) {
                sum = parseInt(sum) + (arr[i]);
            }
            var main = sum / arr.length;
            console.log(" Среднее арифметическое массива = " + main);
        }
    }
}());
var module3 = (function() {
    return {
        clone: function() {
            var clone = arr.slice(0);
            console.log(' Дан массив: ' + clone);
        }
    }
}());
var arr = [1,2,3,4,5,6,7,8,9];
module3.clone(arr);
module2.mainArr(arr);
module1.minMax(arr);
