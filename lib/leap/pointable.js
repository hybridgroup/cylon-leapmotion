/*
 * cylon-leapmotion Leap Pointable class
 * http://cylonjs.com
 *
 * Copyright (c) 2013 The Hybrid Group
 * Licensed under the Apache 2.0 license.
*/

"use strict";

var namespace = require('node-namespace');

namespace('Leap', function() {
  this.Pointable = (function() {
    function Pointable(data) {
      for (var key in data) { this[key] = data[key]; }

      this.hand = false;
      this.gesture = false;
    }

    Pointable.prototype.toString = function() {
      return "[Cylon::Leap::Pointable length='" + this.length + "' zone='" + this.touchZone + "']";
    };

    Pointable.prototype._mapFrameObjects = function(frame) {
      for (var i = 0; i < frame.hands.length; i++) {
        var hand = frame.hands[i];
        if (hand.id === this.handId) { this.hand = hand; }
      }

      for (var i = 0; i < frame.gestures.length; i++) {
        var gesture = frame.gestures[i];
        if (gesture.pointableIds.indexOf(this.id) >= 0) {
          this.gesture = gesture;
        }
      }
    };

    return Pointable;

  })();
});
