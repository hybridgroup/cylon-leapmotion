/*
 * cylon-leapmotion Leap Pointable class
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
    return this.Pointable = (function() {
      function Pointable(data) {
        var key, value;
        for (key in data) {
          value = data[key];
          this[key] = value;
        }
        this.hand = false;
        this.gesture = false;
      }

      Pointable.prototype.toString = function() {
        return "[Cylon::Leap::Pointable length='" + this.length + "' zone='" + this.touchZone + "']";
      };

      Pointable.prototype._mapFrameObjects = function(frame) {
        var gesture, hand, _i, _j, _len, _len1, _ref, _ref1, _ref2;
        _ref = frame.hands;
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          hand = _ref[_i];
          if (hand.id === this.handId) {
            this.hand = hand;
          }
        }
        _ref1 = frame.gestures;
        for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {
          gesture = _ref1[_j];
          if (_ref2 = this.id, __indexOf.call(gesture.pointableIds, _ref2) >= 0) {
            this.gesture = gesture;
          }
        }
        return this;
      };

      return Pointable;

    })();
  });

}).call(this);
