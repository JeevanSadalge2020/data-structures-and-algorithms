/*Print bellow pattern

* * * * * * *
  * * * * *
    * * *
      *
                       */
let str = "";

function pattern(n) {
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j < 2 * n; j++) {
            if (j >= i && j <= (2 * n - i)) {
                str = str + "*";
            }else{
                str = str + " ";
            }
        }
        console.log(str);
        str = "";
    }
}

pattern(10);