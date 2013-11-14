(function() {
  "use strict";
  source('leap');

  describe('Leap', function() {
    var frame;
    frame = require('../../support/frame');
    it('parses Leap Motion API frames', function() {
      var controller, parsedFrame;
      controller = new Leap.Controller({
        initialize: false
      });
      parsedFrame = controller.parseFrame(frame);
      parsedFrame.gestures.length.should.be.eql(1);
      parsedFrame.hands.length.should.be.eql(1);
      return parsedFrame.pointables.length.should.be.eql(5);
    });
    return it('sends events when a frame is parsed', function() {
      var controller, frameSpy, gestureSpy, handSpy, pointableSpy, spies, spy, _i, _len;
      controller = new Leap.Controller({
        initialize: false
      });
      frameSpy = sinon.spy();
      gestureSpy = sinon.spy();
      handSpy = sinon.spy();
      pointableSpy = sinon.spy();
      spies = [frameSpy, gestureSpy, handSpy, pointableSpy];
      controller.on('frame', frameSpy);
      controller.on('hand', handSpy);
      controller.on('gesture', gestureSpy);
      controller.on('pointable', pointableSpy);
      controller.parseFrame(frame);
      for (_i = 0, _len = spies.length; _i < _len; _i++) {
        spy = spies[_i];
        assert(spy.called);
      }
      sinon.assert.callCount(frameSpy, 1);
      sinon.assert.callCount(gestureSpy, 1);
      sinon.assert.callCount(handSpy, 1);
      return sinon.assert.callCount(pointableSpy, 5);
    });
  });

}).call(this);
