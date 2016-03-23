var assert = require('chai').assert;
var Hero = require('../hero.js');

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