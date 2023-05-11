/* Fighter class definition */
const MAX_LIFE = 100;
class Fighter {
  constructor(name, strength, dexterity) {
    this.name = name;
    this.strength = strength;
    this.dexterity = dexterity;
    this.life = MAX_LIFE;
  }
  fight(defender) {
    let damage = Math.floor(Math.random() * this.strength) - defender.dexterity;
    if (damage <= 0) {
      damage = 0;
      //console.log(`${this.name} missed ${defender.name}`);
    }

    if (defender.life - damage <= 0) {
        defender.life = 0;
      //console.log(`${defender.name} is dead`);
    } else {
      defender.life -= damage;
      //console.log(`${this.name} deals ${damage} damage to ${defender.name}`);
    }
  }
  isAlive() {
    return this.life > 0;
  }
}
module.exports = Fighter;
