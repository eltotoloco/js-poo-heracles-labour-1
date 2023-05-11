// First Labour : Heracles vs Nemean Lion
// use your Fighter class here
const Fighter = require('./src/Fighter');

const heracles = new Fighter('Heracles', 20, 6, 5);
const lion = new Fighter('Nemean Lion', 11, 13, 9);
let round = 1;

while(heracles.isAlive() && lion.isAlive()){
  console.log(`Round n°${round}`);
  heracles.fight(lion);
  lion.fight(heracles);
  round++;
}

if(lion.isAlive()){
  console.log(`${heracles.name} is dead`);
  console.log(`${lion.name} wins ! (${lion.life}HP left)`);
} else if(heracles.isAlive()) {
  console.log(`${lion.name} is dead`);
  console.log(`${heracles.name} wins ! (${heracles.life}HP left)`);
} else {
  console.log(`Double kill ! Both ${heracles.name} and ${lion.name} died !`);
}