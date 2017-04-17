// Задача №1
// Создать функцию которая выводит время в html и обновляет значения каждую секунду.
// Время выводить в формате чч:мм:cc, при этом часы, минуты и секунды отобразить разными цветами.

setInterval(function watch() {
date = new Date(),
hh = date.getHours(),
mm = date.getMinutes(),
ss = date.getSeconds(),
hh = (hh < 10) ? '0' + hh : hh,
mm = (mm < 10) ? '0' + mm : mm,
ss = (ss < 10) ? '0' + ss : ss,
document.getElementById('time').innerHTML = hh + ' : ' + mm + ' : ' + ss;
}, 1000);

document.body.style.fontSize = '500%';
document.body.style.textAlign = 'center';
