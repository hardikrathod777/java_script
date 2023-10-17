
function swap(x, y) {
    document.getElementById('h1h').innerHTML="The value of a before swapping is " + x;
    document.getElementById('h2h').innerHTML="The value of b before swapping is " + y;

    x = x + y;
    y = x - y;
    x = x - y;
  
    document.getElementById('h1').innerHTML="The value of a after swapping is " + x;
    document.getElementById('h2').innerHTML="The value of b after swapping is " + y;
  }
  
  swap(5, 10);
  