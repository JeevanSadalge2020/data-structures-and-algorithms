/*  *
   **
  ***
 ****
*****
 ****
  ***
   **
    * 
     
*/

function foo(n) {
    let str = "";
    for (let i = 1; i <= (2 * n - 1); i++) {
        let numberOfSpaces = i <= n ? (n - i) : (i - n);
        for (let j = 1; j <= numberOfSpaces; j++) {
            str += " ";
        }
        let numberOfCols = i <= n ? i : (2 * n - i);
        for (let j = 1; j <= numberOfCols; j++) {
            str += "*";
        }
        console.log(str);
        str = ""
    }
}

foo(5)


