"use strict";

source('adaptor');

var EventEmitter = require('events').EventEmitter;

describe('Cylon.Adaptors.Leapmotion', function() {
  var adaptor = new Cylon.Adaptors.LeapMotion({ initialize: false });

  it("creates a Leap Controller when initialized", function() {
    expect(adaptor.leap.parseFrame).to.be.a('function');
  });

  it("provides a 'connect' function", function() {
    expect(adaptor.connect).to.be.a('function');
  });

  it("provides a 'disconnect' function", function() {
    expect(adaptor.disconnect).to.be.a('function');
  });

  it("defines adaptor events on the 'connect' function", function() {
    adaptor.defineAdaptorEvent = spy();
    adaptor.connection = new EventEmitter;
    adaptor.connect(function() {});

    var events = ['frame', 'hand', 'pointable', 'gesture'];

    for (var i = 0; i < events.length; i++) {
      var event = events[i];
      assert(adaptor.defineAdaptorEvent.calledWith({ eventName: event }));
    }
  });
});
