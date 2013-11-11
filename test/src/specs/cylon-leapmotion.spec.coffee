'use strict';

leapmotion = source("cylon-leapmotion")

describe "basic tests", ->
  it 'can say hello', ->
    leapmotion.hello().should.be.equal "Hello, World!"
