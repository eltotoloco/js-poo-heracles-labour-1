const maxLife = 100;
class Fighter {
  constructor(name, strength, dexterity, life) {
    this.name = name;
    this.strength = strength;
    this.dexterity = dexterity;
    this.life = maxLife;
  }
  fight(defender){
    let damage = Math.floor(Math.random() * this.strength) + 1;
    let newLife = defender.life - (damage - defender.dexterity);
    if (newLife < 0) {
      newLife = 0;
    }
    defender.life = newLife;
    console.log(`${this.name} attack ${defender.name} !!🗡️`);
    console.log(`${defender.name} has lost ${damage - defender.dexterity} life points!! ❣️`);
    console.log(`${defender.name} has now ${defender.life} life points remaining!! ❤️‍🩹`);
  }
}

module.exports = Fighter;