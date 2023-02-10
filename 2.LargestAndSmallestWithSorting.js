let numbers = [];

for (let i = 0; i < 10; i++) {
    let randomnumber = Math.floor(Math.random() * 900) + 100;
    numbers.push(randomnumber);
  }

for (let i = 0; i < numbers.length - i; i++) {
  for (let j = 0; j < numbers.length - i -1; j++) {
    if (numbers[j] > numbers[j + 1]) {
      let temp = numbers[j];
      numbers[j] = numbers[j + 1];
      numbers[j + 1] = temp;
    }
  }
}

let secondLargest = numbers[numbers.length - 2];
let secondSmallest = numbers[1];

console.log(numbers);
console.log("Second largest number: " + secondLargest);
console.log("Second smallest number: " + secondSmallest);
