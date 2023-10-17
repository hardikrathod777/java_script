
function calculate(x, z) {
    var answer = x * x + 2 * x * z + z * z;
    return answer;
  }
  
  var result = calculate(20, 5);
  document.getElementById('h2').innerHTML="The answer is :" + result;
  