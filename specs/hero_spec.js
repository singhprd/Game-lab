var assert = require('chai').assert;
var Hero = require('../hero.js');
var Food = require('../food.js');
var Rat = require('../rat.js');

describe('Hero', function() {

  var  peter = new Hero( "peter", 'pizza' )

  it('Hero has a name', function() {
    assert.equal("peter", peter.name )
  }), 

  it('Hero has a fav food', function() {
    assert.equal("pizza", peter.favFood )
  }), 

  it('Hero has 100 health', function() {
    assert.equal(100, peter.health )
  }), 

  it('Hero can speak', function() {
    assert.equal("peter", peter.talk() )
  })

});

describe('Hero', function() {

  var  carrot = new Food( "carrot", 10 );
  var  pizza = new Food( "pizza", 50 );
  var  francesco = new Hero( "francesco", carrot );
  var tony = new Rat();


  it('eating fav food increases health by 1.5', function() {
    francesco.eat( carrot );
    assert.equal( 115, francesco.health );
  }),

  it('eating fav food increases health', function() {
    francesco.eat( pizza );
    assert.equal( 165, francesco.health );
  }), 

  it('eating poisoned food decreases health', function() {
    francesco.health = 100;
    tony.touchFood( carrot );
    francesco.eat( carrot );
    assert.equal( 90, francesco.health );
  })

});