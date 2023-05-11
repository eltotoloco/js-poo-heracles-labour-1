
const Fighter = require('./src/Fighter.js');

const heracles = new Fighter("🧔 Heracles", 20, 6);
const nemeanLion = new Fighter("🦁 Nemean Lion", 11, 13);

console.log(`${heracles.name} - Life: ${heracles.life} 💙`);  
console.log(`${nemeanLion.name} - Life: ${nemeanLion.life} 💙`);


let round = 1;
while (heracles.life > 0 && nemeanLion.life > 0) {
    console.log(`🕛 Round ${round}`);
    heracles.fight(nemeanLion);
    if (nemeanLion.life > 0) {
        nemeanLion.fight(heracles);
    }
    round++;
    }
    if (heracles.life > 0) {
        console.log(`🏆 ${heracles.name} wins!`);
        console.log(`💀 ${nemeanLion.name} is dead!`);
    }
    else {
        console.log(`🏆 ${nemeanLion.name} wins!`);
        console.log(`💀 ${heracles.name} is dead!`);
    }
