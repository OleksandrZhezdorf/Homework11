const runner = {
    $$runnerId: null,
    $$tasks: [],
    setSpeed: function (speed) {
        this.stop();
        this.start(speed);
    },
    add: function (task) {
        this.$$tasks.push(task);
    },
    start: function (speed) {
        var _this = this;
        this.$$runnerId = setTimeout(function callback() {
            _this.$$tasks.forEach(function (value) {
                value();
            })
            _this.$$runnerId = setTimeout(callback, speed);
        }, speed);
    },
    stop: function () {
        clearTimeout(this.$$runnerId);
    }
}

/*Задание 1*/

runner.setSpeed(2000);

runner.add(() => {
    console.log('Hello');
});

runner.add(() => {
    console.log('World');
});




/*Задание 2*/
const forMapMain = () => {
    var oldArr = [1, 2, 3];
    var newArr = [];
    const forMap = (arr, cb) => {
        for (let i = 0; i < arr.length; i++) {
            cb(newArr[i] = oldArr[i] * 3);
        }
    }
    forMap(oldArr, (value) => console.log(value));
}

forMapMain();










