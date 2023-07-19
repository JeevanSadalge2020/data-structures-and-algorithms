/*Print bellow pattern

1
2 2
3 3 3
4 4 4 4
5 5 5 5 5
                         */

let str = "";
function pattern(n) {
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      str = str + i.toString() + " "
    }
    console.log(str.trim());
    str=""
  }
}

pattern(9);
