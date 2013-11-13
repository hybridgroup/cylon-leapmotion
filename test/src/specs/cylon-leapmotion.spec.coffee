'use strict';

namespace = require 'node-namespace'

# Needed so that tests don't implode
namespace 'Cylon', ->
  class @Basestar
    constructor: ->

leapmotion = source "cylon-leapmotion"

describe "cylon-leapmotion", ->
  it "should be able to register", ->
    leapmotion.register.should.be.a 'function'

  it "should be able to create adaptor", ->
    leapmotion.adaptor.should.be.a 'function'

  it "should be able to create driver", ->
    leapmotion.driver.should.be.a 'function'
