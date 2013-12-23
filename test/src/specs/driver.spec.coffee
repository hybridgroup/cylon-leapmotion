'use strict'

source 'driver'
EventEmitter = require('events').EventEmitter

describe 'Cylon.Drivers.LeapMotion', ->
  driver = new Cylon.Drivers.LeapMotion
    device: new EventEmitter

  it "provides a 'start' method", ->
    expect(driver.start).to.be.a 'function'

  it "defines driver events when the 'start' method is called", ->
    spy = sinon.spy()
    driver.defineDriverEvent = spy
    driver.start ->
    for event in ['frame', 'hand', 'pointable', 'gesture']
      assert spy.calledWith(eventName: event)
