
class Fighter {
    constructor(Name, Life, Strength, Dex){
    this.Name = Name
    this.Life = Life
    this.Strength = Strength
    this.Dex = Dex
    }
fight(defender){
    if (this.isAlive()){
    let dmgDealt = Math.floor(Math.random() * this.Strength) -  defender.Dex
    if (dmgDealt < 0){
        dmgDealt = 0
    }
    defender.Life -= dmgDealt
    if (defender.Life < 0){
        defender.Life = 0
    }
}
}
isAlive(){
    while(this.Life > 0){
    return true}
}
}


module.exports = Fighter;
