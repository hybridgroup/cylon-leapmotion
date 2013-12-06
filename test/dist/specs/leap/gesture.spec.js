(function() {
  "use strict";
  var frameJSON, gestureJSON;

  source('leap/frame');

  frameJSON = require('../../../support/frame');

  gestureJSON = frameJSON.gestures[0];

  describe('Leap', function() {
    return describe('Gesture', function() {
      var gesture;
      gesture = new Leap.Gesture(gestureJSON);
      it("extracts the gesture position", function() {
        var number, _i, _len, _ref, _results;
        gesture.position.should.be.a('array');
        _ref = gesture.position;
        _results = [];
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          number = _ref[_i];
          _results.push(number.should.be.a('number'));
        }
        return _results;
      });
      it("extracts the gesture direction", function() {
        var number, _i, _len, _ref, _results;
        gesture.direction.should.be.a('array');
        _ref = gesture.direction;
        _results = [];
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          number = _ref[_i];
          _results.push(number.should.be.a('number'));
        }
        return _results;
      });
      it("extracts the gesture's starting position", function() {
        var number, _i, _len, _ref, _results;
        gesture.startPosition.should.be.a('array');
        _ref = gesture.startPosition;
        _results = [];
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          number = _ref[_i];
          _results.push(number.should.be.a('number'));
        }
        return _results;
      });
      it("extracts the gesture type", function() {
        return gesture.type.should.be.a('string');
      });
      return it("extracts the gesture state", function() {
        return gesture.state.should.be.a('string');
      });
    });
  });

}).call(this);
