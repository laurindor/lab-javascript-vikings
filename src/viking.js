//IT 1 

// Soldier

class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }
  attack() {
    return this.strength
  };

  receiveDamage(theDamage) {

   
  }
};



//IT 2 

// Viking
class Viking extends Soldier {

  constructor(name, health, strength) {
    super(health, strength);
    this.name = "name";
  } //i think it's ok but it doesnt' work 
}

/*A Viking is a Soldier with an additional property, their name. They also have a different receiveDamage() method and new method, battleCry().

Modify the Viking class, have it inherit from Soldier, re-implement the receiveDamage() method for Viking, and add a new battleCry() method


// Saxon
class Saxon { }

// War
class War { }



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
