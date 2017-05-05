// Задача №1
// Построить объект студент:
// - свойства: Имя, Фамилия, Возраст, Интересы (в виде массива), Место обучения.
// - метод выводящий в консоль биографическую справку в виде, например:
// «Иван Петров. 21 год. Интересы: программирование, музыка, аниме.
// Учится в ИТМО.
 
var obj = {
    Name: 'Ivan',
    'last name': 'Ivanov',
    Age: '25',
    Interests: ['programming', 'music', 'cinema', 'travel'],
    'Place of Study': 'ITMO University'
}
var x = obj;
console.log('Biography:');
console.log(x.Name + ' ' + x['last name'] + '. Age: ' + x.Age + '. Interests: ' + x.Interests + '. Place of study: ' + x['Place of Study'] + '.');
