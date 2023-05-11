// First Labour : Heracles vs Nemean Lion
// use your Figher class here
const Fighter = require('./src/Fighter');


const fighter1 = new Fighter('Heracles', 20, 6);
const fighter2 = new Fighter('Nemean', 11, 13);

let round = 1

do {
    console.log(`It is the round ${round}.`)

    fighter1.fight(fighter2);
    console.log(`🧔${fighter1.name} 🗡️attack 🦁${fighter2.name} ! `)
    console.log(`LIFE : 🧔${fighter1.name}, ${fighter1.life} PV💙. 🦁${fighter2.name}, ${fighter2.life} PV💙.`)


    fighter2.fight(fighter1);
    console.log(`🦁${fighter2.name} 🗡️attack 🧔${fighter1.name} ! `)
    console.log(`LIFE : 🦁${fighter2.name}, ${fighter2.life} PV💙. 🧔${fighter1.name}, ${fighter1.life} PV💙.`)

    round++;
}
    while(fighter1.isAlive() && fighter2.isAlive()){
}


console.log(fighter1.isAlive()
  ? `🧔${fighter1.name} 🏆wins ! 🦁${fighter2.name} is defeated!💀`
  : `The winner is: 🦁${fighter2.name}... Oh no, 🧔${fighter1.name} wins anyway because he is 🧔${fighter1.name}! 🦁${fighter2.name} is defeated anyway!💀`);