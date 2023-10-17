
function greet(name) {
    if (name === undefined) {
      document.getElementById('h2').innerHTML="Good Morning";
    } else {
      document.getElementById('name').innerHTML=name;
    }
  }
  greet();
  greet("hardik");
  