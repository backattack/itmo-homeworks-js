;
(function () {
    window.SpaceInviders = function (el) {
        el.style.height = '500px';
        el.style.width = '100%';
        el.style.background = 'url(img/mad-space.gif)';
        this.gameManager = new GameManager(el);
    }

    function GameManager(el) {
        this.arrEnemy = [];
        for (var i = 0; i < 12; i++) {
            var enemy = new Shape(el, 'img/enemy1.png', (150 + 128 * i), 30);
            this.arrEnemy.push(enemy);
        }
        this.player = new Shape(el, 'img/playerGun.png', 900, 480);
        var that = this;
        this.arrBullet = [];
        document.addEventListener('keydown', function (event) {
            if (event.keyCode === 37) {
                that.player.move(-5, 0);
            } else if (event.keyCode === 39) {
                that.player.move(5, 0);
            } else if (event.keyCode === 32) {
                var Bullet = new Shape(el, 'img/bullet.png', that.player._x + 20, this.player._y);
                that.arrBullet.push(bullet);
            }
        })

        this.loop = function () {
            var dX = this.random() * 5;
            var dY = this.random() * 5;
            for (var i = 0; i < this.arrEnemy.length; i++) {
                this.arrEnemy[i].move(dX, dY);
            }
            for (var i = 0; i < this.arrBullet.length; i++) {
                this.arrBullet[i].move(0, -5);
            }
        }.bind(this);
        this.random = function () {
            return Math.round(Math.random() * 2 - 1);
        };
        setInterval(this.loop, 100);
    }

    function Shape(el, path, x, y) {
        this._x = x;
        this._y = y;
        this.img = document.createElement('img');
        this.img.setAttribute('src', path);
        this.img.style.position = 'absolute';
        el.appendChild(this.img);
        this.setPosition = function (x, y) {
            this.img.style.top = y + 'px';
            this.img.style.left = x + 'px';
        };
        this.setPosition(this._x, this._y)
        this.move = function (dX, dY) {
            this._x += dX;
            this._y += dY;
            this.setPosition(this._x, this._y);
        }
    }

}());
