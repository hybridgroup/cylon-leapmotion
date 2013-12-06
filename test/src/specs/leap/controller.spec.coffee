"use strict"

source 'leap'

describe 'Leap', ->
  describe 'Controller', ->
    frameJSON = require '../../../support/frame'

    it 'parses Leap Motion API frames', ->
      controller = new Leap.Controller(initialize: false)
      frame = controller.parseFrame(frameJSON)

      frame.gestures.should.be.a 'array'
      frame.hands.should.be.a 'array'
      frame.pointables.should.be.a 'array'

      frame.gestures.length.should.be.eql 1
      frame.hands.length.should.be.eql 1
      frame.pointables.length.should.be.eql 5

    it 'sends events when a frame is parsed', ->
      controller = new Leap.Controller(initialize: false)

      frameSpy = sinon.spy()
      gestureSpy = sinon.spy()
      handSpy = sinon.spy()
      pointableSpy = sinon.spy()

      spies = [frameSpy, gestureSpy, handSpy, pointableSpy]

      controller.on 'frame', frameSpy
      controller.on 'hand', handSpy
      controller.on 'gesture', gestureSpy
      controller.on 'pointable', pointableSpy

      controller.parseFrame(frameJSON)

      for spy in spies
        assert spy.called

      sinon.assert.callCount frameSpy, 1
      sinon.assert.callCount gestureSpy, 1
      sinon.assert.callCount handSpy, 1
      sinon.assert.callCount pointableSpy, 5
