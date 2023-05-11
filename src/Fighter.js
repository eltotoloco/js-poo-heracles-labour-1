/* Fighter class definition */
const maxLife = 100;

class Fighter{
    constructor(name,strength,dexterity,life){
        this.name = name;
        this.strength = strength;
        this.dexterity = dexterity;
        this.life = maxLife;
    }
}




module.exports = Fighter;