const Max_Life = 100

class Fighter {
    constructor(Name, Strength, Dex){
    this.Name = Name
    this.Life = Max_Life
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
    if(this.Life > 0){
    return true}
}
}


module.exports = Fighter;
