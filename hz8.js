function pow(base, exp) {
    if (exp === 0) return 1;
    return base * pow(base, exp - 1);
}

function gcd(a, b) {
    if (b === 0) return a;
    return gcd(b, a % b);
}

function maxDigit(num) {
    if (num < 10) return num;
    return Math.max(num % 10, maxDigit(Math.floor(num / 10)));
}

function isPrime(num, divisor = 2) {
    if (num <= 2) return num === 2;
    if (num % divisor === 0) return false;
    if (divisor * divisor > num) return true;
    return isPrime(num, divisor + 1);
}

function factors(num, divisor = 2, result = []) {
    if (num === 1) return result;
    if (num % divisor === 0) {
        result.push(divisor);
        return factors(num / divisor, divisor, result);
    } else {
        return factors(num, divisor + 1, result);
    }
}

function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(pow(2, 3));
console.log(gcd(48, 18));
console.log(maxDigit(739));
console.log(isPrime(29));
console.log(factors(18));
console.log(fibonacci(6));
