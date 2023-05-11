// First Labour : Heracles vs Nemean Lion
// use your Figher class here

//  créer deux instances de la classe Figther : heracles et Nemean lion 
//  heracles a une force de 20 et une dextérité de 6
//  Nemean lion a une force de 11 et une dextérité de 13
//  heracles et Nemean lion ont chacun 100 points de vie




const Fighter = require('./src/Fighter.js');
let Heracles = new Fighter("👨 Heracles", 20, 6)
let Lion = new Fighter("🦁 Nemean Lion", 11, 13)


function fight(fighter1, fighter2){
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

fight(Heracles, Lion)