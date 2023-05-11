/* Fighter class definition */

// une constante MAX_LIFE = 100: les combattants possèdent 100 points de vie max.

const MAX_LIFE = 100;

// une classe Fighter avec les propriétés : name ; strength ; dexterity ; life


class Fighter {
    constructor(name, strength, dexterity){
this.name= name;
this.strength = strength;
this.dexterity = dexterity;
this.life = MAX_LIFE;
}
fight(defender) {
    const attackerDamage = Math.floor(Math.random() * this.strength) + 1;
    const mitigatedDamage = Math.max(attackerDamage - defender.dexterity, 0);
    defender.life = Math.max(defender.life - mitigatedDamage, 0);
    //les points de vie du défenseur ne peuvent tomber en dessous de zéro, rappelez vous bien de ça.
    console.log(
      `${this.name} attacks ${defender.name} for ${mitigatedDamage} damage. ${defender.name} has ${defender.health} health remaining.`
    );
    }
}

module.exports = Fighter;

// faire une méthode fight() qui vous permet d'attaquer l'ennemi. Pour déterminer qui vous attaquez, la méthode fight() prend en paramètre un objet de type Fighter (on peut l'appeller defender) ! Dans le corps de la méthode, vous calculerez en premier les points de dommage de l'attaquant :



  