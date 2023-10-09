var i=1;
var j=1;
var o;
for (i = 5; i >= 1; i--) {
        o = "";

    for (j = 5; j >= i; j--) {
        o += j + " ";
    }

    console.log(o);
}
