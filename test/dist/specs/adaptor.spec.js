(function() {
  'use strict';
  var EventEmitter;

  source('adaptor');

  EventEmitter = require('events').EventEmitter;

  describe('Cylon.Adaptors.Leapmotion', function() {
    var adaptor;
    adaptor = new Cylon.Adaptors.LeapMotion({
      initialize: false
    });
    it("provides a 'connect' function", function() {
      return expect(adaptor.connect).to.be.a('function');
    });
    it("provides a 'disconnect' function", function() {
      return expect(adaptor.disconnect).to.be.a('function');
    });
    return it("defines adaptor events on the 'connect' function", function() {
      var event, spy, _i, _len, _ref, _results;
      spy = sinon.spy();
      adaptor.defineAdaptorEvent = spy;
      adaptor.connection = new EventEmitter;
      adaptor.connect(function() {});
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
