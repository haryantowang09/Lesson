// const because my year value shouldn't be dynamic, it only change per year
let myAge = 22;
const myName = 'Harry';

// let because mentioned the value may change.
let earlyYears = 2;
earlyYears = earlyYears * 10.5;

// not sure wht to put but making a later years.
// laterYears multiplication to calculate number of dog years
let laterYears = myAge - 2;
laterYears = laterYears * 4;
console.log(earlyYears);
console.log(laterYears);

// my age in dog years
let myAgeInDogYears = earlyYears + laterYears;
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`);
