/*
 * cylon-leapmotion Leap Hand class
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
    return this.Hand = (function() {
      function Hand(data) {
        var key, value, _ref;
        for (key in data) {
          value = data[key];
          this[key] = value;
        }
        if (this.palmPosition) {
          _ref = this.palmPosition, this.palmX = _ref[0], this.palmY = _ref[1], this.palmZ = _ref[2];
        }
        this.rotation = {
          axis: this.r[0],
          angle: this.r[1],
          matrix: this.r[2]
        };
        this.translation = this.t;
        this.gesture = false;
        this.pointables = [];
      }

      Hand.prototype.toString = function() {
        return "[Cylon::Leap::Hand X='" + this.palmX + "' Y='" + this.palmY + "' Z='" + this.palmZ + "']";
      };

      Hand.prototype._mapFrameObjects = function(frame) {
        var gesture, pointable, _i, _j, _len, _len1, _ref, _ref1, _ref2;
        _ref = frame.pointables;
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          pointable = _ref[_i];
          if (pointable.handId === this.id) {
            this.pointables.push(pointable);
          }
        }
        _ref1 = frame.gestures;
        for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {
          gesture = _ref1[_j];
          if (_ref2 = this.id, __indexOf.call(gesture.handIds, _ref2) >= 0) {
            this.gesture = gesture;
          }
        }
        return this;
      };

      return Hand;

    })();
  });

}).call(this);
