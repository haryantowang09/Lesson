const spellingWord = 'hippopotamus';

// Write your code below
for (const spell of spellingWord) {
  console.log(spell)
}

const pokemonList = ['Pikachu', 'Charizard', 'Squirtle', 'Yoshi', 'Snorlax'];

// Write your code below
for (const poke of pokemonList) {
  if (poke === 'Yoshi') {
    continue;
  }
  console.log('You caught a '+ poke + '!')
}