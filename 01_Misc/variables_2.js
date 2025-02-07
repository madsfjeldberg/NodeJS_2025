"use strict" 

// totalGlobalVariable = "Never ever do this.";

// use const over let.
// use let over var.




{
  var myValue = false;
  {
    var myValue = true;
  }
}

{
  let myValue = false;
  {
    let myValue = true;
  }
}

// will print 6 six times
for (var i = 0; i <= 5; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000);
}

// fixed by using let instead of var
// now counts from 0 to 5
for (let i = 0; i <= 5; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000);
}

