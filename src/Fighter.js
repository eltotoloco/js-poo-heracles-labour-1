const Max_Life = 100

class Fighter {//  la classe Figther est définie avec un constructeur et une méthode fight
    constructor(Name, Strength, Dexterity){ // le constructeur de la classe Figther prend trois paramètres : name, strength et dexterity
    this.Name = Name
    this.Strength = Strength
    this.Dexterity = Dexterity
    this.Life = Max_Life
    }
fight(defender){ // la méthode fight prend un paramètre : defender
    if (this.isAlive()){ // si le combattant est vivant, il attaque le défenseur
    let dmg = Math.floor(Math.random() * this.Strength) -  defender.Dexterity // let dmg est égal à un nombre aléatoire entre 0 et la force du combattant moins la dextérité du défenseur
    if (dmg < 0){ // si dmg est inférieur à 0, dmg est égal à 0
        dmg = 0 // si dmg est inférieur à 0, dmg est égal à 0
    }
    defender.Life -= dmg 
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