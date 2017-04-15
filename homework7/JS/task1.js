// Создать функцию которая выводит время в html и обновляет значения каждую секунду.
// Время выводить в формате чч:мм:cc, при этом часы, минуты и секунды отобразить разными цветами.
function watch() {
    const date = new Date(),
        hh = date.getHours(),
        mm = date.getMinutes(),
        ss = date.getSeconds();

    if (hh < 10)
        hh = '0' + hh;
    document.getElementById('hours').innerHTML = hh;

    if (mm < 10)
        mm = '0' + mm;
    document.getElementById('minutes').innerHTML = mm;
    if (ss < 10)
        ss = '0' + ss;
    document.getElementById('seconds').innerHTML = ss;

};

function clockStart() {
    setInterval(watch, 1000);
};
clockStart();

const part1 = document.getElementById('hours');
const part2 = document.getElementById('minutes');
const part3 = document.getElementById('seconds');
part1.style.color = 'blue';
part2.style.color = 'rgb(0, 255, 10)';
part3.style.color = 'rgb(250, 0, 255)';
