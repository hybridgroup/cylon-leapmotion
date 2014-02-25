"use strict";

source('driver');

var EventEmitter = require('events').EventEmitter;

describe('Cylon.Drivers.LeapMotion', function() {
  var driver = new Cylon.Drivers.LeapMotion({ device: new EventEmitter });

  it("provides a 'start' method", function() {
    expect(driver.start).to.be.a('function');
  });

   it("defines driver events when the 'start' method is called", function() {
    driver.defineDriverEvent = spy();
    driver.start(function() {});

    var events = ['frame', 'hand', 'pointable', 'gesture'];

    for (var i = 0; i < events.length; i++) {
      var event = events[i];
      assert(driver.defineDriverEvent.calledWith({ eventName: event }));
    }
  });
});
