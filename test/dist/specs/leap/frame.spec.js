(function() {
  "use strict";
  var frameJSON;

  source('leap/frame');

  frameJSON = require('../../../support/frame');

  describe('Leap', function() {
    return describe('Frame', function() {
      var frame;
      frame = new Leap.Frame(frameJSON);
      it("extracts the frame's ID", function() {
        frame.id.should.be.a('number');
        return frame.id.should.be.equal(99943);
      });
      it("extracts the frame's timestamp", function() {
        frame.timestamp.should.be.a('number');
        return frame.timestamp.should.be.equal(4729292670);
      });
      it("stores the raw frame data", function() {
        return frame.raw.should.be.equal(frameJSON);
      });
      it("stores the detected hands in an array", function() {
        return frame.hands.should.be.a('array');
      });
      it("stores the detected gestures in an array", function() {
        return frame.gestures.should.be.a('array');
      });
      it("stores the detected pointables in an array", function() {
        return frame.pointables.should.be.a('array');
      });
      it("extracts rotation data from the frame", function() {
        frame.rotation.should.be.a('object');
        frame.rotation.axis.should.be.a('array');
        frame.rotation.angle.should.be.a('array');
        return frame.rotation.matrix.should.be.a('array');
      });
      it("extracts scale factor data from the frame", function() {
        return frame.scaleFactor.should.be.a('number');
      });
      it("extracts translation factor data from the frame", function() {
        return frame.translation.should.be.a('array');
      });
      return it("exposes a toString function", function() {
        return frame.toString.should.be.a('function');
      });
    });
  });

}).call(this);
