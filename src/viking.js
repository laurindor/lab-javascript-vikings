//IT 1 

// Soldier

class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }
  attack() {
    
    let soldierHealth = this.strength
    console.log('Your strenght is ${soldierHealth}')
  };

  receiveDamage(theDamage) {
    
  }
};



//IT 2 

// Viking
class Viking extends Soldier {

  constructor(health, strength, name) {

    super();
    this.name = "name";
  }
}

/*A Viking is a Soldier with an additional property, their name. They also have a different receiveDamage() method and new method, battleCry().

Modify the Viking class, have it inherit from Soldier, re-implement the receiveDamage() method for Viking, and add a new battleCry() method.

inheritance
Viking should extend Soldier
class
should receive 3 arguments (name, health & strength)
should receive the name property as its 1st argument
should receive the health property as its 2nd argument
should receive the strength property as its 3rd argument*/



// Saxon
class Saxon { }

// War
class War { }



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
