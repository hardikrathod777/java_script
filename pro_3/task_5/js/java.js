var n = 10;
var n1 = 0, n2 = 1, nT;
var i = 1;

console.log('Fibonacci Series:');

while (i <= n) {
    console.log(n1);
    nT = n1 + n2;
    n1 = n2;
    n2 = nT;
    i++;
}
