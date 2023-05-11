// First Labour : Heracles vs Nemean Lion
// use your Figher class here
const Fighter = require('./src/Fighter');


const heracles = new Fighter('Heracles', 20, 6);
const nemean = new Fighter('Nemean', 11, 13);

console.log(`Je suis ${heracles.name} mon nom parle pour mois avec ${heracles.life} point de vie`)
console.log(`Je suis ${nemean.name} Féroce Lion avec ${nemean.life} point de vie`)