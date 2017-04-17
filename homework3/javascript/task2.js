// Задача №2
// Написать функцию подсчета суммы от n до m

function summ(n, m, d = m - n) {
    return ((n * 2 + d * (m - n)) / 2) * m
}
console.log(summ(prompt("Введите N"), prompt('Введите M')));
