// First Labour : Heracles vs Nemean Lion
// use your Figher class here

const Fighter = require("./src/Fighter.js");

const heracles = new Fighter("🧔 Heracles", 20, 6);
const nemeanLion = new Fighter("🦁 Nemean Lion", 11, 13);
let round = 1;

while (heracles.isAlive() && nemeanLion.isAlive()) {
  console.log(`Round ${round}`);
  
  // Heracles attacks the Nemean Lion
  console.log(`${heracles.name} attacks ${nemeanLion.name}`);
  heracles.fight(nemeanLion);
  console.log(`${heracles.name} remaining life: ${heracles.life}`);
  console.log(`${nemeanLion.name} remaining life: ${nemeanLion.life}`);
  
  if (!nemeanLion.isAlive()) {
    break; // Heracles won, stop the fight
  }
  
  // Nemean Lion attacks Heracles
  console.log(`${nemeanLion.name} attacks ${heracles.name}`);
  nemeanLion.fight(heracles);
  console.log(`${heracles.name} remaining life: ${heracles.life}`);
  console.log(`${nemeanLion.name} remaining life: ${nemeanLion.life}`);

  if (!heracles.isAlive()) {
    break; // Heracles won, stop the fight
  }
  
  round++;
}

if (heracles.isAlive()) {
  console.log(`\n🏆 ${heracles.name} is the winner! 💀 ${nemeanLion.name} is defeated.`);
} else {
  console.log(`\n🏆 ${nemeanLion.name} is the winner! 💀 ${heracles.name} is defeated.`);
}