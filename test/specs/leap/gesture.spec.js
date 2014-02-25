"use strict";

source('leap/frame');

var gestureJSON = frameJSON.gestures[0];

describe('Leap', function() {
  describe('Gesture', function() {
    var gesture = new Leap.Gesture(gestureJSON);

    it("extracts the gesture position", function() {
      expect(gesture.position).to.be.a('array');

      for (var i = 0; i < gesture.position.length; i++) {
        var number = gesture.position[i];
        expect(number).to.be.a('number');
      }
    });

    it("extracts the gesture direction", function() {
      expect(gesture.direction).to.be.a('array');

      for (var i = 0; i < gesture.direction.length; i++) {
        var number = gesture.direction[i];
        expect(number).to.be.a('number');
      }
    });

    it("extracts the gesture's starting position", function() {
      expect(gesture.startPosition).to.be.a('array');

      for (var i = 0; i < gesture.startPosition.length; i++) {
        var number = gesture.startPosition[i];
        expect(number).to.be.a('number');
      }
    });

    it("extracts the gesture type", function() {
      expect(gesture.type).to.be.a('string');
    });

    it("extracts the gesture state", function() {
      expect(gesture.state).to.be.a('string');
    });
  });
});
