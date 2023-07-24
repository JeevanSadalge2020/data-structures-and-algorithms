/*Print bellow pattern

        * 
      * * * 
    * * * * *
  * * * * * * *
* * * * * * * * *
                       */
let str = "";

function pattern(n) {
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n - i; j++) {
      str = str + " ";
    }
    for (let j = 1; j < 2*i; j++) {
      str = str + "*";
    }
    console.log(str);
    str = "";
  }
}

pattern(10);

// In a single row we have to print 2 types of J's. So there will be 2 for loops, one for space and another for *