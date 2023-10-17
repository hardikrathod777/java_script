
function fahrenheitToCelsius(fah) {
    var celsius = (fah - 32) / 1.8;
    return celsius;
  }
  
  var result = fahrenheitToCelsius(120);
  document.getElementById('h2').innerHTML="The temperature in Celsius is :" + result;
  