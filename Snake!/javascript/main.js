;(function () {
    window.onload = function () {
        var canvas = document.getElementById("field"), // находим наш холст по id
            ctx = canvas.getContext("2d"), // присваеваем переменной контекст 
            width = canvas.width, // ширина и высота холста равна этим параметрам переменной canvas
            height = canvas.height,
            blockSize = 10, // ширина и высота ячейки в px
            widthInBlocks = width / blockSize, // получили ширину и высоту в ячейках, 50
            heightInBlocks = height / blockSize, // 50
            score = 0; //   очки игрока в начале игры

        var drawBorder = function () { //рисуем рамку холста 
            ctx.fillStyle = "black"; //ее цвет
            ctx.fillRect(0, 0, width, blockSize); // верхняя рамка, верхний левый угол, ширина холста, высота 10 px
            ctx.fillRect(0, height - blockSize, width, blockSize); // нижняя рамка, тоже самое, только по y - 490
            ctx.fillRect(0, 0, blockSize, height); // аналогично для левой
            ctx.fillRect(width - blockSize, 0, blockSize, height); // и правой
        };

        var drawScore = function () { // рисуем счет
            ctx.font = "bold 20px Comic Sans MS"; // шрифт
            ctx.fillStyle = "black"; // цвет
            ctx.textAlign = "left"; // выравниваем по левому краю 
            ctx.textBaseline = "top"; // задаем значение топ (текст под линией)
            ctx.fillText("Score: " + score, blockSize, blockSize); // текст внутри левого угла рамки (x,y)=(10,10)
        };

        var gameOver = function () { // рисуем game over
            clearInterval(intervalId); // останавливаем игру с вызовом переменной intervalId (вызов всех методов)
            ctx.font = "75px Arial";
            ctx.fillStyle = "black";
            ctx.textAlign = "center";
            ctx.textBaseline = "middle";
            ctx.fillText("GAME OVER", width / 2, height / 2); // передаем строку, (деленная на два, высота и ширина холста)
        };

        var circle = function (x, y, radius, fillCircle) { // рисуем круг
            ctx.beginPath(); // для отрисовки круга
            ctx.arc(x, y, radius, 0, Math.PI * 2, false);
            ctx.fill();
        };

        var Block = function (col, row) { // конструктор для ячеек холста по позиции от левого верхнего угла
            this.col = col; // по x 
            this.row = row; // по y
        };

        Block.prototype.drawSquare = function (color) { // рисуем квадрат, добавляем этот метод в block
            var x = this.col * blockSize; // вычисляем x и y для ячейки
            var y = this.row * blockSize;
            ctx.fillStyle = color; //присваиваем свойству контекста цвет, переданный в color
            ctx.fillRect(x, y, blockSize, blockSize); // передаем вычисленные x,y, ширину и высоту в 10 px
        };

        Block.prototype.drawCircle = function (color) { // метод для круга
            var centerX = this.col * blockSize + blockSize / 2; // находим координаты центра окружностей в середине ячейки
            var centerY = this.row * blockSize + blockSize / 2;
            ctx.fillStyle = color;
            circle(centerX, centerY, blockSize / 2, true); // для круга координаты, радиус, true - для заполнения цветом
        };

        Block.prototype.equal = function (otherBlock) { // метод на совпадение ячеек
            return this.col === otherBlock.col && this.row === otherBlock.row; //  при равенсте true
        };

        var Snake = function () { // змейка
            this.body = [ // массив
                new Block(7, 5), // 3 первых ячейки змейки с начальными координатами
                new Block(6, 5),
                new Block(5, 5)
            ];
            this.route = "right"; // текущее направление змейки
            this.nextRoute = "right"; // шаг анимации после текущего (для обработчика с клавиатуры)
        };

        Snake.prototype.draw = function () { // рисуем змейку, перебор ячеек из массива body с вызовом метода для квадрата
            for (var i = 0; i < this.body.length; i++) { // цикл
                if (i % 2 == 0) { // чередуем цвет змейки по четному-нечетному
                    this.body[i].drawSquare("green");
                } else this.body[i].drawSquare("purple");
            }
        };

        Snake.prototype.move = function () { // метод для перемещении змейки
            var head = this.body[0]; // сохраняем первый элемент массива body в head (голова змейки) 
            var newHead; // переменная для сохранения новой головы змейки 
            this.route = this.nextRoute; // движение будет на последней нажатой клавише
            if (this.route === "right") { // обработчик для разных направлений
                newHead = new Block(head.col + 1, head.row); // +1 - по иксу, в зависимости от направления
            } else if (this.route === "down") {
                newHead = new Block(head.col, head.row + 1); // аналогично по y для движения вниз
            } else if (this.route === "left") {
                newHead = new Block(head.col - 1, head.row);
            } else if (this.route === "up") {
                newHead = new Block(head.col, head.row - 1);
            }

            if (this.checkCollision(newHead)) { // вызываем метод для головы змейки
                gameOver(); // функция для конца игры
                return;
            }

            this.body.unshift(newHead); // добавляем newHead в начало массива body

            if (newHead.equal(coin.position)) { // сравниваем позиции головы змей и монетки на совпадение
                score++; // true
                coin.move(); // перемещаем в новую позицию методом move
            } else {
                this.body.pop(); // false, убираем ячейку в хвосте
            }
        };

        Snake.prototype.checkCollision = function (head) { // метод проверки на столкновние для змейки
            var leftColl = (head.col === 0); // первая ячейка змейки окажеться в 0ой ячейке  по x для левой стенки
            var topColl = (head.row === 0);
            var rightColl = (head.col === widthInBlocks - 1); // для правой стенки холста, проверка на 50-1=49
            var bottomColl = (head.row === heightInBlocks - 1);
            var wallColl = leftColl || topColl || rightColl || bottomColl; // проверяем и записываем результат в переменную
            var selfColl = false; // для столкновения с телом змейки
            for (var i = 0; i < this.body.length; i++) {
                if (head.equal(this.body[i])) { // методом перебора массива, сравниваем положение методом на совпадение
                    selfColl = true;
                }
            }
            return wallColl || selfColl; // возвращаем true false для обоих столкновений
        };

        Snake.prototype.setRoute = function (newRoute) { // метод для недопустимых смен направления
            if (this.route === "up" && newRoute === "down") { // если направление вверх а нажата клавиша вниз
                return; // выход из метода
            } else if (this.route === "right" && newRoute === "left") {
                return;
            } else if (this.route === "down" && newRoute === "up") {
                return;
            } else if (this.route === "left" && newRoute === "right") {
                return;
            }
            this.nextRoute = newRoute; // если направление правильное сохраняем в nextRoute
        };

        var Coin = function () { // монетка
            this.position = new Block(10, 10); // первая монетка в игре в ячейке (10,10)
        };

        Coin.prototype.draw = function () { // метод для рисовки монетки
            this.position.drawCircle("gold"); // через метод для круга, присваиваем цвет
        };

        Coin.prototype.move = function () { // метод перемещения монетки по полю
            var randomCol = Math.floor(Math.random() * (widthInBlocks - 1) + 1); // округляем случайное число 
            var randomRow = Math.floor(Math.random() * (heightInBlocks - 1) + 1); // умноженное на 49 
            this.position = new Block(randomCol, randomRow); // новая ячейка со случайными x,y
        };

        var snake = new Snake(), // переменные для змейки и монетки
            coin = new Coin();

        var intervalId = setInterval(function () { // вызываем все методы каждые 100 млсек
            ctx.clearRect(0, 0, width, height); // метод очистки холста  
            drawScore();
            snake.move();
            snake.draw();
            coin.draw();
            drawBorder();
        }, 100);

        var key = { // клавиши
            65: "left",
            87: "up",
            68: "right",
            83: "down"
        };

        $("body").keydown(function (event) { // обработчик нажатия для html - body
            var newRoute = key[event.keyCode]; // сохраняем наши клавиши
            if (newRoute !== undefined) { // если нажаты нужные клавиши
                snake.setRoute(newRoute);
            }
        });
    };
}());