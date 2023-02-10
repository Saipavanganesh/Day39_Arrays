function findLargestAndSmallest(randomNumbers){
let largest = Number.MIN_SAFE_INTEGER;
let secondLargest = Number.MIN_SAFE_INTEGER;
let smallest = Number.MAX_SAFE_INTEGER;
let secondSmallest = Number.MAX_SAFE_INTEGER;

for (let i = 0; i < randomNumbers.length; i++) {
  let current = randomNumbers[i];
  if (current > largest) {
    secondLargest = largest;
    largest = current;
  } 
  else if (current > secondLargest) {
    secondLargest = current;
  }
  if (current < smallest) {
    secondSmallest = smallest;
    smallest = current;
  } 
  else if (current < secondSmallest) {
    secondSmallest = current;
  }
}

console.log("Second largest number: " + secondLargest);
console.log("Second smallest number: " + secondSmallest);
}


const randomNumbers = [];

for (let i = 0; i < 10; i++) {
  let number = Math.floor(Math.random() * 900) + 100;
  randomNumbers.push(number);
}

console.log(randomNumbers);
findLargestAndSmallest(randomNumbers);