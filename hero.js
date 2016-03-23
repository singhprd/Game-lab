// A.
// - Create a constructor to create a Hero character.
//   - A Hero has a name
//   - A Hero has health
//   - A Hero has a favourite food
//   - A Hero can talk saying their name


var Hero = function(name, favFood ) {
  this.name = name;
  this.favFood = favFood;
};

Hero.prototype = {
  talk: function(){
    return this.name;
  },
  health: 100
};

module.exports = Hero;