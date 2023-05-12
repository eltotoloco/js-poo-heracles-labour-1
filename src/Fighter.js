/* Fighter class definition */

const maxlife = 100;

class Fighter {
  constructor(name, strength, dexterity) {
    this.name = name;
    this.strength = strength;
    this.dexterity = dexterity;
    this.life = maxlife;
  }

  fight(defender) {
    const attackerDamage = Math.ceil(Math.random() * this.strength);
    const defenderDamage = Math.max(0, attackerDamage - defender.dexterity);
    defender.life = Math.max(0, defender.life - defenderDamage);
    console.log(`${this.name} attaque ${defender.name} et lui inflige ${defenderDamage} points de dégâts.`);
    console.log(`${defender.name} 💙 ${defender.life}`);
  }
}

module.exports = Fighter;

  
    
  