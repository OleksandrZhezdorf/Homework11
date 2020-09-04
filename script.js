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

function mapExample(arr, callback) {
    results = [];
    for (i = 0; i < arr.length; i++) {
        results.push(callback(arr[i]));
    }
    return results;
};

var mapSum = function (x) {
    x = x + 2*x;
    return x;
}

var mapResult = mapExample([1, 2, 3, 4, 5], mapSum);
console.log(mapResult);



















