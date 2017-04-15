// Создать объект «Товар» включающий:
// - свойства, такие как фото, артикул, описание и т.п.;
// - метод, которому при вызове передается id пустого div элемента и в этот html элемент данный
// метод создаст и внесёт все необходимые html элементы, стили, и содержание для отображения
// всей информации хранящихся в свойствах объекта о данном товаре. Дизайн оформления информации
// в html о товаре – это ваше творчество.

var product = {
    image: 'pic1.jpeg',
    'Item Weight': '9.6 ounces',
    'Shipping Weight': '1.5 pounds',
    'Manufacturer': 'Intel',
    'ASIN': 'B004EEUHD8',
    'Model Number': 'SLBF7',
    'Category': ['Computer Components', 'CPU Processors']
}
for (var x in product) {
    product = x + ": " + product[x];
    document.write(product + "<BR>");
}

var parent = document.getElementById('firstContainer');
var child = document.createElement('div');
child.setAttribute('id', 'secondContainer');
parent.appendChild(child);

parent.innerHTML = '<h4> 2.4GHz Intel Xeon E5530 Quad Core </h4>';
parent.style.textAlign = 'center';
document.body.style.color = 'rgb(78, 14, 14)';
parent.style.fontStyle = 'italic';
parent.style.fontSize = '30px';
parent.style.marginTop = '30px';
