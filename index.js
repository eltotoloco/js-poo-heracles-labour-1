// First Labour : Heracles vs Nemean Lion
// use your Figher class here

const { Fighter } = require('./src/Fighter');

const heracles = new Fighter('🧔 Heracles', 20, 6);
const nemeanLion = new Fighter('🦁 Nemean Lion', 11, 13);

console.log('Début du combat à mort !')

let round = 1;
while (heracles.isAlive() > 0 && nemeanLion.isAlive() > 0){
    console.log(`Round ${round} heure`);
    heracles.fight(nemeanLion);

    if (nemeanLion.life > 0){
        nemeanLion.fight(heracles);
    }

    round++;
}

console.log(`Fin du combat !`);

if (heracles.life > 0) {
    console.log(`🏆 ${heracles.name} est le vainqueur !`);
    console.log(`💀 ${nemeanLion.name} a perdu !.`);
  } else {
    console.log(`🏆 ${nemeanLion.name} est le vainqueur !`);
    console.log(`💀 ${heracles.name} a perdu ! connard !.`);
  }

