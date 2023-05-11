/* Fighter class definition */
const MAX_LIFE = 100;

class Fighter {
    name;
    strength;
    dexterity;
    luck;

    constructor(name, strength, dexterity, luck){
        this.name = name;
        this.strength = strength;
        this.dexterity = dexterity;
        this.luck = luck;
        this.life = MAX_LIFE;
    }

    fight(defender){
        let damageDealt = Math.floor(Math.random() * (this.strength) + 1);
        let criticalHitTest = Math.floor(Math.random() * (101 - 1) + 1);
        let criticalHit = false;

        if(criticalHitTest <= this.luck){
            damageDealt *= 2 + 1;
            criticalHit = true;
        }


        if(damageDealt - defender.dexterity < 0){
            damageDealt = 0;
        } else {
            damageDealt = (damageDealt - defender.dexterity);
            defender.life -= damageDealt;
            if(defender.life < 0){
                defender.life = 0;
            }
        }

        if(criticalHit){
            console.log(`${this.name} attacks ${defender.name} and inflicts a critical hit dealing ${damageDealt} points of damage ! Double damage ! ${defender.name} remaining HP : ${defender.life}`);
        } else {
            console.log(`${this.name} attacks ${defender.name} and deal ${damageDealt} damage point. ${defender.name} remaining HP : ${defender.life}`);
        }
    }

    isAlive(){
        if(this.life > 0){
            return true;
        }
        return false;
    }
}

module.exports = Fighter;