/*
 * cylon-leapmotion Leap Frame class
 * http://cylonjs.com
 *
 * Copyright (c) 2013 The Hybrid Group
 * Licensed under the Apache 2.0 license.
*/


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
        var gesture, hand, point, _i, _j, _k, _len, _len1, _len2, _ref, _ref1, _ref2, _ref3, _ref4;
        this.id = frame.id;
        this.timestamp = frame.timestamp;
        this.raw = frame;
        _ref = [[], [], []], this.gestures = _ref[0], this.hands = _ref[1], this.pointables = _ref[2];
        _ref1 = [frame.r, frame.s, frame.t], this.r = _ref1[0], this.s = _ref1[1], this.t = _ref1[2];
        _ref2 = frame.gestures;
        for (_i = 0, _len = _ref2.length; _i < _len; _i++) {
          gesture = _ref2[_i];
          this.gestures.push(new Leap.Gesture(gesture));
        }
        _ref3 = frame.hands;
        for (_j = 0, _len1 = _ref3.length; _j < _len1; _j++) {
          hand = _ref3[_j];
          this.hands.push(new Leap.Hand(hand));
        }
        _ref4 = frame.pointables;
        for (_k = 0, _len2 = _ref4.length; _k < _len2; _k++) {
          point = _ref4[_k];
          this.pointables.push(new Leap.Pointable(point));
        }
      }

      Frame.prototype.toString = function() {
        return "[Cylon::Leap::Frame id='" + this.id + "' timestamp='" + this.timestamp + "']";
      };

      return Frame;

    })();
  });

}).call(this);
