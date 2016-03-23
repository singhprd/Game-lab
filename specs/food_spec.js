var assert = require('chai').assert;
var Food = require('../food.js');
var Rat = require('../rat.js');

describe('Food', function() {

  var  carrot = new Food( "carrot", 10 )

  it('Food has a name', function() {
    assert.equal("carrot", carrot.name )
  }), 

  it('Hero has a fav food', function() {
    assert.equal(10, carrot.replen )
  }), 

  it('food is not poisoned', function() {
    assert.equal(false, carrot.poisoned)
  }),

  it('food is poisoned after rat touches it', function() {
    var gordon = new Rat();
    gordon.touchFood(carrot);
    assert.equal(true, carrot.poisoned);
  })

});