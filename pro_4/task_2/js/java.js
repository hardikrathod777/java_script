
function circleArea(r) {
    const pi = 3.14;
    let area = pi * r * r
    return area;
  }
  
  let result = circleArea(5);
  document.getElementById('h2').innerHTML="The area of the circle is " + result;
  