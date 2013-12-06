"use strict"

source 'leap/frame'

frameJSON = require '../../../support/frame'

describe 'Leap', ->
  describe 'Frame', ->
    frame = new Leap.Frame(frameJSON)

    it "extracts the frame's ID", ->
      frame.id.should.be.a 'number'
      frame.id.should.be.equal 99943

    it "extracts the frame's timestamp", ->
      frame.timestamp.should.be.a 'number'
      frame.timestamp.should.be.equal 4729292670

    it "stores the raw frame data", ->
      frame.raw.should.be.equal frameJSON

    it "extracts rotation data from the frame", ->
      frame.rotation.should.be.a 'object'
      frame.rotation.axis.should.be.a 'array'
      frame.rotation.angle.should.be.a 'array'
      frame.rotation.matrix.should.be.a 'array'

    it "extracts scale factor data from the frame", ->
      frame.scaleFactor.should.be.a 'number'

    it "extracts translation factor data from the frame", ->
      frame.translation.should.be.a 'array'

    it "stores the detected hands in an array", ->
      frame.hands.should.be.a 'array'

    it "stores the detected gestures in an array", ->
      frame.gestures.should.be.a 'array'

    it "stores the detected pointables in an array", ->
      frame.pointables.should.be.a 'array'

    it "exposes a toString function", ->
      frame.toString.should.be.a 'function'
