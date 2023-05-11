
const Fighter = require('./src/Fighter.js');
const Max_Life = 100
let Heracles = new Fighter("👨 Heracles", Max_Life, 20, 6)
let Lion = new Fighter("🦁 Nemean Lion", Max_Life, 11, 13)


function fightToDeath(fighter1, fighter2){
    let roundNumber = 1
    while(fighter1.isAlive() && fighter2.isAlive()){
        fighter1.fight(fighter2)
        fighter2.fight(fighter1)
        console.log(`⌛ Round #${roundNumber}`)
        console.log(`${fighter1.Name} 🗡️ ${fighter2.Name} 💙 ${fighter2.Name}: ${fighter2.Life}`)
        if (fighter2.isAlive()){
            console.log(`${fighter2.Name} 🗡️ ${fighter1.Name} 💙 ${fighter1.Name}: ${fighter1.Life}`)
        }
        roundNumber ++
    }
    if (fighter1.isAlive() ){
        console.log(`${fighter1.Name} won the fight, ${fighter2.Name} was defeated`)
    }
    if (fighter2.isAlive()){
        console.log(`${fighter2.Name} won the fight, ${fighter1.Name} was defeated`)
    }
}

fightToDeath(Heracles, Lion)