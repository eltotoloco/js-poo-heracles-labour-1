// First Labour : Heracles vs Nemean Lion
// use your Figher class here
const Fighter = require('./src/Fighter');


const Heracles = new Fighter('Heracles', 20, 6);
const Nemean = new Fighter('Nemean', 11, 13);

let round = 1

do {
    console.log(`It is the round ${round}.`)

    Heracles.fight(Nemean);
    console.log(`${Heracles.name} attack ${Nemean.name} ! `)
    console.log(`LIFE : ${Heracles.name}, ${Heracles.life} PV. ${Nemean.name}, ${Nemean.life} PV.`)


    Nemean.fight(Heracles);
    console.log(`${Nemean.name} attack ${Heracles.name} ! `)
    console.log(`LIFE : ${Heracles.name}, ${Heracles.life} PV. ${Nemean.name}, ${Nemean.life} PV.`)

    round++;
}
    while(Heracles.isAlive() && Nemean.isAlive()){
}


console.log(Heracles.isAlive()
  ? `Heracles wins! ${Nemean.name} is defeated!`
  : `The winner is: ${Nemean.name}... Oh no, Heracles wins anyway because he is Heracles! ${Nemean.name} is defeated anyway!`);