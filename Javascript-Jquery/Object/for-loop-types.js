// FOREACH
const artists = ['Picasso', 'Kahlo', 'Matisse', 'Utamaro'];
artists.forEach(artist => {
  console.log(artist + ' is one of my favorite artists.');
});

// MAP
// map return new array
const animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];

// Create the secretMessage array below
const secretMessage = animals.map(animal => {
  return animal[0];
})
console.log(secretMessage.join(''));

const bigNumbers = [100, 200, 300, 400, 500];
const smallNumbers = bigNumbers.map(bigNumber => {
  return bigNumber / 100;
})
console.log(smallNumbers);

const numbers = [1, 2, 3, 4, 5];
const squareNumbers = numbers.map(number => {
  return number * number;
});
console.log(squareNumbers);

// FILTER
// The callback function for the .filter() method should return true or false
const things = ['desk', 'chair', 5, 'backpack', 3.14, 100];
const onlyNumbers = things.filter(thing => {
  return typeof thing === 'number';
});
console.log(onlyNumbers);

const randomNumbers = [375, 200, 3.14, 7, 13, 852];
const smallNumbers = randomNumbers.filter(rndo => {
  return rndo < 250;
})

const favoriteWords = ['nostalgia', 'hyperbole', 'fervent', 'esoteric', 'serene'];
const longFavoriteWords = favoriteWords.filter(word => {
  return word.length > 7;
})
