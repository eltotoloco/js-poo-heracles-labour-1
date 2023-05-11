// First Labour : Heracles vs Nemean Lion
// use your Figher class here
const Fighter = require('./src/Fighter');


const heracles = new Fighter('Heracles', 20, 6);
const nemean = new Fighter('Nemean', 11, 13);
let round = 1;

heracles.Fight(nemean);


while(heracles.life !== 0 && nemean.life !== 0 ){
    
    console.log(`round 🕛 ${round}`);
    heracles.Fight(nemean);
    nemean.Fight(heracles);
    round = round + 1 ;
    

}