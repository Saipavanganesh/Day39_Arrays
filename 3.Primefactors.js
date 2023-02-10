let number = 48;
let primeFactors = [];

for (let i = 2; i <= number; i++) {
  while (number % i == 0) {
    primeFactors.push(i);
    number = number / i;
  }
}

console.log(primeFactors);
