/*Print bellow pattern

* * * * *
* * * * *
* * * * *
* * * * *
* * * * *
* * * * *                         */
let str = "";
function pattern(n) {
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      str = str + "*";
    }
    console.log(str);
    str=""
  }
}

pattern(10);
