function reverseNumber(n) {
    if (n < 10) return n.toString()
    else {
        let arr = [];
        let r = 0;
        let q = n;

        do {
            r = q % 10;
            q = parseInt(q / 10);
            arr.push(r)
        } while (q > 9)
        arr.push(q)
        return arr.join("")
    }
}

console.log(reverseNumber(7778912346))
console.log(reverseNumber(6))
console.log(reverseNumber(16))
console.log(reverseNumber(10))
console.log(reverseNumber(9))
console.log(reverseNumber(20))