/*Print bellow pattern

* * * * *
* * * * *
* * * * *
* * * * *
* * * * *
* * * * *                         */
let str = "";
function pattern(n) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      str = str + "*";
    }
    console.log(str);
    str=""
  }
}

pattern(10);
