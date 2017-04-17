// Задача №2
// Заданы два массива A и B необходимо их объединить
// в один массив C так, чтобы в массиве остались уникальные
// (неповторяющиеся) элементы.
// Например: A = [1,2], B = [2,3] получим С = [1, 2, 3].

var arr1 = ['1', '2', '3', '4', 'один', 'два'],
    arr2 = ['2', '3', '4', '5', 'два', 'три'],
    arr3 = [];
var arr = arr3.concat(arr1, arr2);

function uniq(arr) {
    var obj = {};
    for (var i = 0; i < arr.length; i++) {
        var str = arr[i];
        obj[str] = true;
    }
    return Object.keys(obj)
}
console.log(uniq(arr));
