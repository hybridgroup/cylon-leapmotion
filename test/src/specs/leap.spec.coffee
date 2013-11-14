"use strict";

source 'leap'

describe 'Leap', ->
  frame = require '../../support/frame'
  it 'parses Leap Motion API frames', ->
    controller = new Leap.Controller(initialize: false)
    parsedFrame = controller.parseFrame(frame)

    parsedFrame.gestures.length.should.be.eql 1
    parsedFrame.hands.length.should.be.eql 1
    parsedFrame.pointables.length.should.be.eql 5

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

    controller.parseFrame(frame)

    for spy in spies
      assert spy.called

    sinon.assert.callCount frameSpy, 1
    sinon.assert.callCount gestureSpy, 1
    sinon.assert.callCount handSpy, 1
    sinon.assert.callCount pointableSpy, 5
