/*

    *
   ***
  *****
 *******
*********
 *******
  *****
   ***
    *
    

   */

function foo(n) {
    let str = "";
    for (let i = 1; i <= (2 * n - 1); i++) {
        let numberOfSpaces = i <= n ? (n - i) : (i - n);
        for (let j = 1; j <= numberOfSpaces; j++) {
            str += " ";
        }
        let numberOfCols = i <= n ? (2 * i - 1) : ((2*n-1) - numberOfSpaces * 2);
        for (let j = 1; j <= numberOfCols; j++) {
            str += "*";
        }
        console.log(str);
        str = ""
    }
}

foo(10)

/* 1. Calculate number of rows for given n
2. There will 2 forloops, one for space and one for star 
3. Number of spaces will be different for 1 to n and then (n+1) to (2*n-1). So calculate them and set the values
4. Similarly number of cols will be calculated like above BUT difference is,the number of cols for (n+1) to (2n-1) will be calculated as
a. total points will be (2n-1), out of which (2*(numberOfSpaces)) will be for space, remaining will be for star
THIS MAKE SENSE WHEN DONE ON A BOARD OR PAPER
*/