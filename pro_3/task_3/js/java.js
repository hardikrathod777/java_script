var n = 153;
var s = 0;
var t = n;
var r;
var armstrongNumbers = [];

while (t > 0) {
    r = t % 10;
    s += r * r * r;
    t = parseInt(t / 10);
}

if (s == n) {
    armstrongNumbers.push(n);
}

console.log("Armstrong numbers: " + armstrongNumbers);
