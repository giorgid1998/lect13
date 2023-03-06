
function count() {
    var counter = document.getElementById("counter");
    var num = 0;
    var direction = 1;

    setInterval(function () {
        counter.innerHTML = num;

        if (num == 10) {
            direction = -1;
        } else if (num == 0) {
            direction = 1;
        }

        num += direction;
    }, 500);
}

