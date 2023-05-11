// First Labour : Heracles vs Nemean Lion
// use your Figher class here
const Fighter = require('./src/Fighter');


const Heracles = new Fighter('Heracles', 20, 6);
const Nemean = new Fighter('Nemean', 11, 13);
let round = 1

while(Heracles.life >0 && Nemean.life >0){
    console.log(`It is the ${round} round.`)

    Heracles.fight(Nemean);
    console.log(`${Heracles.name} attack ${Nemean.name} ! `)
    console.log(`LIFE : ${Heracles.name}, ${Heracles.life} PV. ${Nemean.name}, ${Nemean.life} PV.`)


    Nemean.fight(Heracles);
    console.log(`${Nemean.name} attack ${Heracles.name} ! `)
    console.log(`LIFE : ${Heracles.name}, ${Heracles.life} PV. ${Nemean.name}, ${Nemean.life} PV.`)

    round++;
}


console.log(Heracles.life > 0 ? `Heracles wins !! Nemean is dead !` : `The Winner is : Nem... oh noo, Heracles wins anyway cause he is Heracles !! Nemean defeated anywaaaay !`)
