// Задача №3
// Написать функцию factorial(n), которая возвращает факториал числа n, использовать рекурсию

function factorial(n) {
    return n ? n * factorial(n - 1) : 1;
}
console.log(factorial(prompt('Введите N')));
