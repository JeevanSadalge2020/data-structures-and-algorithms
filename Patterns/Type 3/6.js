/*

*
* *
* * *
* * * *
* * * * *
* * * *
* * *
* *
*

*/

function foo(n) {
    let str = "";
    for (let i = 1; i <= (2 * n - 1); i++) {
        let numberOfColsInEachRow = i <= n ? i : 2 * n - i;/*This line is IMP here */
        for (let j = 1; j <= numberOfColsInEachRow; j++) {
            str += "*";
        }
        console.log(str);
        str = ""
    }
}
foo(50)