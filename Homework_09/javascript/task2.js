// Задача №2
// Создать шаблон объектов «Человек».
// Свойства «Имя», «Возраст», «Пол», «Интересы».
// Метод преобразования к строке вида: «Человек:
// Иван. Возраст: 25 лет. Пол: м. Интересы:
// музыка, программирование.»
// Создать шаблон объектов «Студент».
// Свойства от наследованные от шаблона объектов
// «Человек» и добавить «Институт».
// Переопределить метод преобразования к строке
// вида: «Студент: Иван. Возраст: 25 лет. Пол: м.
// Интересы: музыка, программирование.
// Обучается в ИТМО.»

function Human(name, lastname, age, gender, interests) {
    this.name = name;
    this.lastname = lastname;
    this.age = age;
    this.gender = gender;
    this.interests = interests;
    this.toString = function() {
        return `Human: ${this.name + ' ' + this.lastname}. Age: ${this.age}. Gender: ${this.gender}. Interests: ${this.interests}.`
    }
};

function Student(name, lastname, age, gender, interests, university) {
    Human.call(this, name, lastname, age, gender, interests);
    this.university = university;
    this.toString = function() {
        return `Student: ${this.name + ' ' + this.lastname}. Age: ${this.age}. Gender: ${this.gender}. Interests: ${this.interests}. Place of Study: ${this.university}.`
    }
};

var objHuman = new Human('Ivan', 'Ivanov', '25', 'male', ['programming', 'music', 'cinema', 'travel'])
console.log(objHuman.toString());

var objHumStud = new Student('Ivan', 'Ivanov', '25', 'male', [
    'programming', 'music', 'cinema', 'travel'
], 'ITMO University')
console.log(objHumStud.toString());
