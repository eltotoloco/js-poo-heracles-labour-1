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
        const damage = Math.floor(Math.random() *this.strength) +1; 
        const mitigatedDamage = Math.max(0, damage - defender.dexterity);

        defender.life -= mitigatedDamage;
        defender.life = Math.max(0, defender.life);

        console.log(`${this.name} attaque ${defender.name} et inflige ${mitigatedDamage} points de dommage`);
        console.log(`${defender.name} a maintenant ${defender.life} points de vie.`);
    }
    isAlive(){
        return this.life > 0;
    }

}



module.exports = {Fighter, MAX_LIFE};  

