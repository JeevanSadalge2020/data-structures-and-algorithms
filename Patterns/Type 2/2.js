/*Print bellow pattern

1 2 3 4 5
1 2 3 4
1 2 3 
1 2 
1 
                       */
let str = "";
function pattern(n) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < (n-i); j++) {
      str = str + (j+1);
    }
    console.log(str);
    str=""
  }
}

pattern(5);
