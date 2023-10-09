var n = 50;
var i = 1;
var p = [];

while (i <= n) {
    var isPrime = true;

    if (i == 1) {
        isPrime = false;
    } else {
        for (var j = 2; j <= i / 2; j++) {
            if (i % j == 0) {
                isPrime = false;
                break;
            }
        }
    }

    if (isPrime) {
        p.push(i);
    }
    i++;
}

console.log("Prime numbers: " + p);
