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
        const diff = damage - defender.dexterity;

        let defendDodge = 0;
        diff < 0 ? defendDodge = 0 : defendDodge = diff;

        let newLife = defender.life - defendDodge;
        newLife < 0 ? defender.life = 0 : defender.life = newLife;

        return console.log(damage)
    }

    isAlive(){
        return this.life > 0 ? true : false ;
    }
}

module.exports = Fighter;
