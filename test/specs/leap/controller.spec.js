"use strict";

var Leap = source('leap');

describe('Leap', function() {
  describe('Controller', function() {
    it('parses Leap Motion API frames', function() {
      var controller = new Leap.Controller({ initialize: false }),
          frame = controller.parseFrame(frameJSON);

      expect(frame.gestures).to.be.a('array');
      expect(frame.hands).to.be.a('array');
      expect(frame.pointables).to.be.a('array');
      expect(frame.gestures.length).to.be.eql(1);
      expect(frame.hands.length).to.be.eql(1);
      expect(frame.pointables.length).to.be.eql(5);
    });

    it('sends events when a frame is parsed', function() {
      var controller = new Leap.Controller({ initialize: false }),
          frameSpy = spy(),
          gestureSpy = spy(),
          handSpy = spy(),
          pointableSpy = spy(),
          spies = [frameSpy, gestureSpy, handSpy, pointableSpy];

      controller.on('frame', frameSpy);
      controller.on('hand', handSpy);
      controller.on('gesture', gestureSpy);
      controller.on('pointable', pointableSpy);

      controller.parseFrame(frameJSON);

      for (var i = 0; i < spies.length; i++) {
        assert(spies[i].called);
      }

      sinon.assert.callCount(frameSpy, 1);
      sinon.assert.callCount(gestureSpy, 1);
      sinon.assert.callCount(handSpy, 1);
      sinon.assert.callCount(pointableSpy, 5);
    });
  });
});
