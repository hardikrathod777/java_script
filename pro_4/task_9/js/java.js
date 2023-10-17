
function oddOrEven(number) {
    if (number % 2 === 0) {
      document.getElementById('h2').innerHTML="The number is even";
    } else {
      document.getElementById('h2').innerHTML="The number is odd";
    }
  }
  
  oddOrEven(8);
  