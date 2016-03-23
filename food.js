// B.
// - Create a food constructor.
//   - Food should have a name
//   - Food should have a replenishment value

var Food = function( name, replen ) {
  this.name = name;
  this.replen = replen; 
  this.poisoned = false;
};

Food.prototype = {

};


module.exports = Food;