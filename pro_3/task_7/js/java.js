var n = 5000;
var i = 1;
var magicN = [];

while (i <= n) {
    var s = 0;
    var t = i;

    while (t > 0) {
        var d = t % 10;
        s += d;
        t = Math.floor(t / 10);
    }

    if (s == 1) {
        magicN.push(i);
    }
    i++;
}

console.log("Magic numbers: " + magicN);
