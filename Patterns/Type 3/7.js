/*

1
0 1
1 0 1
0 1 0 1
1 0 1 0 1

*/

function foo(n) {
    let str = "";
    let start = 0;
    for (let i = 1; i <= n; i++) {
        str = "";
        start = i % 2 === 1 ? 1 : 0;
        for (let j = 1; j <= i; j++) {
            str += start;
            start = 1 - start;
        }
        console.log(str);
        str = "";
    }
}

foo(500)