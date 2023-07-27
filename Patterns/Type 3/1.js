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
        /*First for loop is to print space */
        for (let j = 1; j <= n - i; j++) {
            str = str + "+";
        }
        /*Second for loop is to print star */
        for (let j = 1; j < 2 * i; j++) {
            str = str + "*";
        }
        console.log(str);
        str = "";
    }
}

pattern(3);

// In a single row we have to print 2 types of J's. So there will be 2 for loops, one for space and another for *