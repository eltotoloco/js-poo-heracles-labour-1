// First Labour : Heracles vs Nemean Lion
// use your Figher class here

const Fighter =  require('./src/Fighter.js');


const heracles = new Fighter ("🧔heracles", 20, 6);
const nemean = new Fighter ("🦁nemean", 11, 13);

const roundDisplay = (fighter1, fighter2) => {
    return `${fighter1.name} 🗡️  ${fighter1.life} 💙 ${fighter2.name} : ${fighter2.life}`;
  };

let round = 0;
while (heracles.isAlive() && nemean.isAlive()) {
  console.log(`🕛 Round #${round}`);

  heracles.fight(nemean);
  console.log(roundDisplay(heracles, nemean));

  //Boar can fight only if he is still alive after heracles strike
  if (nemean.isAlive()) {
    nemean.fight(heracles);
    console.log(roundDisplay(nemean, heracles));
  }

  round++;
}

const score = (fighter1, fighter2) => {
    return fighter1.isAlive() ? {
      winner: fighter1,
      looser: fighter2,
    } : {
      winner: fighter2,
      looser: fighter1
    };
  };

const result = score(heracles, nemean);

console.log(`💀 ${result.looser.name} is dead`);
console.log(`🏆 ${result.winner.name} wins (💙 ${result.winner.life} )`);