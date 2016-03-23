  // - Create a Rat constructor
  // - Rats should be able to touch food,  if they do the food becomes poisonous.
  // - Heroes that eat poisonous food should lose health.

var Rat = function() {
};

Rat.prototype = {
  touchFood: function( food ) {
    food.poisoned = true;
  } 
}


module.exports = Rat;
