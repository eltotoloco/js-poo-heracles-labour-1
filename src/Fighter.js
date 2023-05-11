/* Fighter class definition */

const MAX_LIFE = 100;
class Fighter {
    constructor(name, strength, dexterity){
        this.name = name;
        this.strength = strength;
        this.dexterity = dexterity;
        this.life = MAX_LIFE;
    }

    fight(defender){
        const damage = this.strength - defender.dexterity;
        console.log(`${this.name} attaque ${defender.name} et inflige ${damage} points de dommage`);
    }

}
heracles.fight(nemeanLion);


module.exports = {Fighter, MAX_LIFE};  

