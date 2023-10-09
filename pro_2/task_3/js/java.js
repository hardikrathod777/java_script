var P = 10000;
var R = 0;
var N = 4;

if (N > 3) {
  if (N <= 5) {
    R = 3;
  } else {
    if (N <= 8) {
      R = 5;
    } else {
      if (N <= 12) {
        R = 12;
      } else {
        R = 15;
      }
    }
  }
}

var I = (P * R * N) / 100;

console.log("Total Interest:", I);