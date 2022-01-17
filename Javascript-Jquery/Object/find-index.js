const animals = ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey', 'salamander', 'elephant'];

const foundAnimal = animals.findIndex(animal => {
  return animal === 'elephant';
})

console.log(animals[foundAnimal]);

let indices = []; 
animals.forEach(function (animal, index) {
    if (animal.charAt(0) === 's') {
      this.push(index)
    }
}, indices);

console.log(indices);
