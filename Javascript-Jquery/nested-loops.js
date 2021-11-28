// Write your code below
const bobsFollowers = ['wing', 'wang', 'wong', 'wung']
const tinasFollowers = ['ving', 'wang', 'wong']
const mutualFollowers = []

for(let i=0; i < bobsFollowers.length; i++) {
  for(let j=0; j < tinasFollowers.length; j++) {
    if (bobsFollowers[i] === tinasFollowers[j]) {
      mutualFollowers.push(bobsFollowers[i]);
    }
  }
}