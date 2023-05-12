// First Labour : Heracles vs Nemean Lion
// use your Figher class here

const Fighter = require('./src/Fighter');

const heracles = new Fighter('Héraclès 😊', 20, 6);
const lion = new Fighter('Lion de Némée 🦁', 11, 13);

console.log(`${heracles.name} 💙 ${heracles.life}`);
console.log(`${lion.name} 💙 ${lion.life}`);

let round = 1;

while (heracles.life > 0 && lion.life > 0) {
  console.log(`⌛ ROUND ${round}`);
  heracles.fight(lion);
  if (lion.life > 0) {
    lion.fight(heracles);
  }
  round++;
}

console.log(`🏆 ${heracles.life > 0 ? heracles.name : lion.name} a vaincu ${heracles.life > 0 ? lion.name : heracles.name} !`);



