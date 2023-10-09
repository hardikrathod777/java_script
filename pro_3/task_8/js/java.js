var n = 135;
var i = 1;
var disariumN = [];

while (i <= n) {
    var s = 0;
    var t = i.toString();

    for (var j = 0; j < t.length; j++) {
        s += Math.pow(parseInt(t.charAt(j)), j + 1);
    }

    if (s == i) {
        disariumN.push(i);
    }
    i++;
}

console.log("Disarium numbers: " + disariumN);
