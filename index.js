// First Labour : Heracles vs Nemean Lion
// use your Figher class here

const {Fighter, MAX_LIFE} = require('./src/Fighter.js');

const heracles = new Fighter ('🥷', 'Heracles', 20, 6);
const nemeanLion = new Fighter ('🦁', 'Nemean Lion', 11, 13);

/*console.log(heracles);
console.log(nemeanLion);*/

console.log(`${heracles.name}: ${heracles.life} 💙`);
console.log(`${nemeanLion.name}: ${nemeanLion.life} 💙`);
