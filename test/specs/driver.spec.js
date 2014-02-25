(function() {
  'use strict';
  var EventEmitter;

  source('driver');

  EventEmitter = require('events').EventEmitter;

  describe('Cylon.Drivers.LeapMotion', function() {
    var driver;
    driver = new Cylon.Drivers.LeapMotion({
      device: new EventEmitter
    });
    it("provides a 'start' method", function() {
      return expect(driver.start).to.be.a('function');
    });
    return it("defines driver events when the 'start' method is called", function() {
      var event, spy, _i, _len, _ref, _results;
      spy = sinon.spy();
      driver.defineDriverEvent = spy;
      driver.start(function() {});
      _ref = ['frame', 'hand', 'pointable', 'gesture'];
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        event = _ref[_i];
        _results.push(assert(spy.calledWith({
          eventName: event
        })));
      }
      return _results;
    });
  });

}).call(this);
