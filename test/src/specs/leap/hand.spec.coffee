"use strict"

source 'leap/frame'

frameJSON = require '../../../support/frame'
handJSON = frameJSON.hands[0]

describe 'Leap', ->
  describe 'Hand', ->
    hand = new Leap.Hand(handJSON)

    it "extracts the palm position", ->
      hand.palmX.should.be.a 'number'
      hand.palmY.should.be.a 'number'
      hand.palmZ.should.be.a 'number'

    it "extracts the rotation information", ->
      hand.rotation.should.be.a 'object'
      hand.rotation.axis.should.be.a 'array'
      hand.rotation.angle.should.be.a 'array'
      hand.rotation.matrix.should.be.a 'array'
