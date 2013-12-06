"use strict"

source 'leap/frame'

frameJSON = require '../../../support/frame'
pointableJSON = frameJSON.pointables[0]

describe 'Leap', ->
  describe 'Pointable', ->
    pointable = new Leap.Pointable(pointableJSON)

    it "extracts the length of the pointable", ->
      pointable.length.should.be.a 'number'

    it "extracts the position of the tip of the pointable", ->
      pointable.tipPosition.should.be.a 'array'
      for number in pointable.tipPosition
        number.should.be.a 'number'

    it "extracts the pointable's touch zone", ->
      pointable.touchZone.should.be.a 'string'

    it "extracts whether or not the pointable is a tool", ->
      pointable.tool.should.be.a 'boolean'
