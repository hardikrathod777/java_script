
function calculate(a, b, c) {
    var answer = (b * b - 4 * a * c) / (2 * a);
    return answer;
  }
  
  var result = calculate(10, 5, 7);
  document.getElementById('h2').innerHTML="The answer is :" + result;
  