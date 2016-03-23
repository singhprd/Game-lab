// A.
// - Create a constructor to create a Hero character.
//   - A Hero has a name
//   - A Hero has health
//   - A Hero has a favourite food
//   - A Hero can talk saying their name
// C.
//   - A hero should be able to eat food, and health should go up by the replenishment value
//   - If the food is their favourite food, their health should go up by 1.5 * value.

var Food = require('./food.js');

var Hero = function(name, favFood ) {
  this.name = name;
  this.favFood = favFood;
};

Hero.prototype = {
  talk: function(){
    return this.name;
  },
  health: 100,
  eat: function( food ) {
    if (food.poisoned) {
      this.health = this.health - food.replen;
    } else {

      if ( food === this.favFood ) {
        this.health = this.health + (food.replen * 1.5);
      } else {
        this.health = this.health + (food.replen);
      }
    }
  }
};

module.exports = Hero;