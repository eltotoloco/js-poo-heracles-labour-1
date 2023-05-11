// First Labour : Heracles vs Nemean Lion
// use your Figher class here

//  créer deux instances de la classe Figther : heracles et Nemean lion 
//  heracles a une force de 20 et une dextérité de 6
//  Nemean lion a une force de 11 et une dextérité de 13
//  heracles et Nemean lion ont chacun 100 points de vie



const Fighter = require("./src/Fighter");

const heracles = new Fighter("🧔Heracles", 20, 6, 100);

const nemeanLion = new Fighter("🦁Nemean Lion", 11, 13, 100);

let round = 1;

while (heracles.health > 0 && nemeanLion.health > 0) {
    console.log(`Round ${round}:`);
    heracles.fight(lion);
    lion.fight(heracles);
    console.log("");
    round++;
  }
  
  if (heracles.health > 0) {
    console.log(`${heracles.name} a vaincu ${nemeanLion.name} ! 🏆`);
    console.log(`${nemeanLion.name} est mort 💀`);
  } else {
    console.log(`${nemeanLion.name} a vaincu ${heracles.name} ! 🏆`);
    console.log(`${heracles.name} est mort 💀`);
  }