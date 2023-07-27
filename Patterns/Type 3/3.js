/*Print bellow pattern
 *
 * *
 * * *  
 * * * *
 * * *
 * *
 *
 */

function foo(n) {
    let str = "";
    for (let i = 1; i <= (2 * n - 1); i++) {
        let c = i <= n ? i : (2 * n - i)/*This calculates number of cols for each row */
        for (let j = 1; j <= c; j++) {
            str += "*";
        }
        console.log(str);
        str = "";
    }
}

foo(5)