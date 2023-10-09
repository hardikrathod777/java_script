var n = 1;
var i = 1;
var o ;
for (i = 1; i <= 5; i++) {
        o = "";

    for (j = 1; j <= i; j++) {
        o += n + " ";
        n++;
    }

    console.log(o);
}
