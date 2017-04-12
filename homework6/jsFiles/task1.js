// Подключить стороннюю библиотеку для построения графиков.
// Построить график функции y = f(x):
// y = 5/x, при x>=1;
// y = x*x – 4*x, при x<1.
// Шаг варьирования x равен 0.01 и интервал варьирования -5 ? x ? 5.
// Расчёт функции y = f(x) реализовать в виде отдельной функции.

var line1 = {
    x: [],
    y: [],
    type: 'scatter'
};

function Func(x) {
    if (x >= 1) {
        y = 5 / x;
    } else if (x < 1) {
        y = x * x - 4 * x;
    }
    return y;
}

for (var i = -5; i <= 5; i += 0.01) {
    line1.x.push(i);
    line1.y.push(Func(i));
}

var data = [line1];
Plotly.newPlot('placeholder', data);
