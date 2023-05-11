/* Fighter class definition */
const maxLife = 100;
class Fighter {
    constructor(name, strength, dexterity){
    this.name = name;
    this.strength = strength;
    this.dexterity = dexterity;
    this.life = maxLife;
    }

    fight(defender){
        let attackPoints = this.getRandomHit(this.getDamage());
        let damages = Math.max(attackPoints - defender.getDefense(), 0);
        defender.life = Math.max(defender.life - damages, 0);
    }

    getDamage(){
        return this.strength;
    }

    getDefense(){
        return this.dexterity;
    }


    getRandomHit(max){
        return 1 + Math.floor(Math.random() * max);
    }

    isAlive() {
        return this.life > 0
      }

}
module.exports = Fighter;