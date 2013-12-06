"use strict"

source 'leap/frame'

frameJSON = require '../../../support/frame'
gestureJSON = frameJSON.gestures[0]

describe 'Leap', ->
  describe 'Gesture', ->
    gesture = new Leap.Gesture(gestureJSON)

    it "extracts the gesture position", ->
      gesture.position.should.be.a 'array'
      for number in gesture.position
        number.should.be.a 'number'

    it "extracts the gesture direction", ->
      gesture.direction.should.be.a 'array'
      for number in gesture.direction
        number.should.be.a 'number'

    it "extracts the gesture's starting position", ->
      gesture.startPosition.should.be.a 'array'
      for number in gesture.startPosition
        number.should.be.a 'number'

    it "extracts the gesture type", ->
      gesture.type.should.be.a 'string'

    it "extracts the gesture state", ->
      gesture.state.should.be.a 'string'
