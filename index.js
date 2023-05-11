// First Labour : Heracles vs Nemean Lion
// use your Figher class here
const Fighter = require('./src/Fighter');


const Heracles = new Fighter('Heracles', 20, 6);
const Nemean = new Fighter('Nemean', 11, 13);


console.log(`1st Hero : ${Heracles.name}, ${Heracles.life} PV.`)
console.log(`2nd Hero : ${Nemean.name}, ${Nemean.life} PV.`)