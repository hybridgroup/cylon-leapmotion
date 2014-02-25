(function() {
  "use strict";
  var pointableJSON;

  source('leap/frame');

  pointableJSON = frameJSON.pointables[0];

  describe('Leap', function() {
    return describe('Pointable', function() {
      var pointable;
      pointable = new Leap.Pointable(pointableJSON);
      it("extracts the length of the pointable", function() {
        return pointable.length.should.be.a('number');
      });
      it("extracts the position of the tip of the pointable", function() {
        var number, _i, _len, _ref, _results;
        pointable.tipPosition.should.be.a('array');
        _ref = pointable.tipPosition;
        _results = [];
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          number = _ref[_i];
          _results.push(number.should.be.a('number'));
        }
        return _results;
      });
      it("extracts the pointable's touch zone", function() {
        return pointable.touchZone.should.be.a('string');
      });
      return it("extracts whether or not the pointable is a tool", function() {
        return pointable.tool.should.be.a('boolean');
      });
    });
  });

}).call(this);
