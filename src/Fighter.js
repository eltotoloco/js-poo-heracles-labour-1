/* Fighter class definition */
const maxLife = 100;

class Fighter{
    constructor(name,strength,dexterity,life){
        this.name = name;
        this.strength = strength;
        this.dexterity = dexterity;
        this.life = maxLife;
    }


    
        
   
    Fight(defender){
        
    let damage = Math.round(Math.random()*this.strength);
    let rest = damage - defender.dexterity;
    if(rest <= 0)
    {
        rest = 0;
    }
    defender.life -= rest;

    
    if(this.name === "Heracles" && defender.life >0){
        console.log(`🧔 ${this.name} ⚔️ ${rest}  🦁${defender.name} ❤️ =  ${defender.life}`);
    }
     else if(this.name === "Nemean" && defender.life >0){
        console.log(`🦁 ${this.name} ⚔️ ${rest}  🧔${defender.name} ❤️ =  ${defender.life}`);
    }
    
    
        if(this.name === "Heracles" && defender.life <=0){
            this.life = 0;
           return console.log(`🧔 ${this.name} à gagné le combat contre  🦁${defender.name} à perdu miaou miaou`);
        }
         if(this.name === "Nemean" && defender.life <=0){
            this.life = 0;
             return console.log(`🦁 ${this.name} à gagné le combat contre  🧔${defender.name} à perdu`);
        }
     
        
    }
   
}









module.exports = Fighter;