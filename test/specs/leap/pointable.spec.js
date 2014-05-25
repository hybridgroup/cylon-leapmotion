"use strict";

var Pointable = source('leap/pointable');

var pointableJSON = frameJSON.pointables[0];

describe('Leap', function() {
  describe('Pointable', function() {
    var pointable = new Pointable(pointableJSON);

    it("extracts the length of the pointable", function() {
      expect(pointable.length).to.be.a('number');
    });

    it("extracts the position of the tip of the pointable", function() {
      expect(pointable.tipPosition).to.be.a('array');

      for (var i = 0; i < pointable.tipPosition.length; i++) {
        var number = pointable.tipPosition[i];
        expect(number).to.be.a('number');
      }
    });

    it("extracts the pointable's touch zone", function() {
      expect(pointable.touchZone).to.be.a('string');
    });

    it("extracts whether or not the pointable is a tool", function() {
      expect(pointable.tool).to.be.a('boolean');
    });
  });
});
