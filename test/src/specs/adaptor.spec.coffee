'use strict'

source 'adaptor'
EventEmitter = require('events').EventEmitter

describe 'Cylon.Adaptors.Leapmotion', ->
  adaptor = new Cylon.Adaptors.LeapMotion initialize: false

  it "creates a Leap Controller when initialized", ->
    expect(adaptor.leap.parseFrame).to.be.a 'function'

  it "provides a 'connect' function", ->
    expect(adaptor.connect).to.be.a 'function'

  it "provides a 'disconnect' function", ->
    expect(adaptor.disconnect).to.be.a 'function'

  it "defines adaptor events on the 'connect' function", ->
    spy = sinon.spy()
    adaptor.defineAdaptorEvent = spy
    adaptor.connection = new EventEmitter
    adaptor.connect ->
    for event in ['frame', 'hand', 'pointable', 'gesture']
      assert spy.calledWith(eventName: event)
