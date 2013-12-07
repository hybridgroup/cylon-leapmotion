/*
 * cylon-leapmotion Leap Gesture class
 * http://cylonjs.com
 *
 * Copyright (c) 2013 The Hybrid Group
 * Licensed under the Apache 2.0 license.
*/


(function() {
  "use strict";
  var namespace,
    __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

  namespace = require('node-namespace');

  namespace('Leap', function() {
    return this.Gesture = (function() {
      function Gesture(data) {
        var key, value;
        for (key in data) {
          value = data[key];
          this[key] = value;
        }
        this.hands = [];
        this.pointables = [];
      }

      Gesture.prototype.toString = function() {
        return "[Cylon::Leap::Gesture - " + this.type + "]";
      };

      Gesture.prototype._mapFrameObjects = function(frame) {
        var hand, pointable, _i, _j, _len, _len1, _ref, _ref1, _ref2, _ref3;
        _ref = frame.hands;
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          hand = _ref[_i];
          if (_ref1 = hand.id, __indexOf.call(this.handIds, _ref1) >= 0) {
            this.hands.push(hand);
          }
        }
        _ref2 = frame.pointables;
        for (_j = 0, _len1 = _ref2.length; _j < _len1; _j++) {
          pointable = _ref2[_j];
          if (_ref3 = pointable.id, __indexOf.call(this.pointableIds, _ref3) >= 0) {
            this.pointables.push(pointable);
          }
        }
        return this;
      };

      return Gesture;

    })();
  });

}).call(this);
