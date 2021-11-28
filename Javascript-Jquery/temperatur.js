// assignment 293 value to kelvin variable.
let kelvin = 293;

// assignment celcius substraction from kelvin - 273
let celcius = kelvin - 273;

// assingment based on fahrenheit equation
// .floor is math floor down
let fahrenheit = Math.floor(celcius * (9/5)) + 32;

console.log(`The temperatur is ${fahrenheit} degress Fahrenheit.`);

// extr practice
// newton scale
let newton = Math.floor(celcius * (33/100));
console.log(`The temperatur is ${newton} degrees Newton.`);
