//https://www.codewars.com/kata/541c8630095125aba6000c00

function digital_root(n) {
    let sum = 0;

    while (n >= 10) {
        sum = 0;
        n = n + '';
        for (let digit of n) {
            sum += +digit;
        }
        n = sum;
    }
    return n;
}