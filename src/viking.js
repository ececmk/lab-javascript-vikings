// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    }
    attack() {
        return this.strength;}

    receiveDamage(amount) {
    this.health -= amount;}
}



// Viking
class Viking extends Soldier {
    constructor(health, strength, name) {
        super(strength, name);
        this.name = health;
        }
    
  receiveDamage(amount) {
    super.receiveDamage(amount);
    if (this.health > 0) {
      return `${this.name} has received ${amount} points of damage`;
    } 
      return `${this.name} has died in act of combat`;
    
  }

  battleCry() {
    return 'Odin Owns You All!';
  }
}
    
// Saxon  
class Saxon extends Soldier {

receiveDamage(amount) {
    super.receiveDamage(amount);
    if (this.health > 0) {
        return `A Saxon has received ${amount} points of damage`;
        }
        
          return `A Saxon has died in combat`;
        
      }
}

// War
class War {

    constructor() {
        this.vikingArmy = [];
        this.saxonArmy = [];
      }
    addViking(vikingSoldier) {
        this.vikingArmy.push(vikingSoldier);
}

    addSaxon(saxonSoldier){
        this.saxonArmy.push(saxonSoldier);
    }
}

//Attack

vikingAttack() {
    let randomVikingPosition = Math.floor(Math.random() * this.vikingArmy.length);
    let randomViking = this.vikingArmy[randomVikingIndex];
}