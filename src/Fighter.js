/* Fighter class definition */
const maxLife = 100;

class Fighter{
    constructor(name, strength, dexterity){
        this.name = name;
        this.strength = strength;
        this.dexterity = dexterity;
        this.life = maxLife;

    }

    fight(defender){
        const damage = Math.round(Math.random()*this.strength);
return console.log(damage)
    }
}

module.exports = Fighter;
