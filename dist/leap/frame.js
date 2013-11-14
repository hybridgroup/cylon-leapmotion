(function() {
  "use strict";
  var namespace;

  namespace = require('node-namespace');

  require('./gesture');

  require('./hand');

  require('./pointable');

  namespace('Leap', function() {
    return this.Frame = (function() {
      function Frame(frame) {
        var gesture, hand, pointable, _i, _j, _k, _len, _len1, _len2, _ref, _ref1, _ref2, _ref3;
        _ref = [[], [], []], this.gestures = _ref[0], this.hands = _ref[1], this.pointables = _ref[2];
        this.id = frame.id;
        this.timestamp = frame.timestamp;
        this.r = frame.r;
        this.s = frame.s;
        this.t = frame.t;
        _ref1 = frame.gestures;
        for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
          gesture = _ref1[_i];
          this.gestures.push(new Leap.Gesture(gesture));
        }
        _ref2 = frame.hands;
        for (_j = 0, _len1 = _ref2.length; _j < _len1; _j++) {
          hand = _ref2[_j];
          this.hands.push(new Leap.Hand(hand));
        }
        _ref3 = frame.pointables;
        for (_k = 0, _len2 = _ref3.length; _k < _len2; _k++) {
          pointable = _ref3[_k];
          this.pointables.push(new Leap.Pointable(pointable));
        }
      }

      Frame.prototype.toString = function() {
        return "[Cylon::Leap::Frame id='" + this.id + "' timestamp='" + this.timestamp + "']";
      };

      return Frame;

    })();
  });

}).call(this);
