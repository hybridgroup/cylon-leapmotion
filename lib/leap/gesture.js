/*
 * cylon-leapmotion Leap Gesture class
 * http://cylonjs.com
 *
 * Copyright (c) 2013 The Hybrid Group
 * Licensed under the Apache 2.0 license.
*/

"use strict";

var Gesture = module.exports = function Gesture(data) {
  for (var key in data) { this[key] = data[key]; }
  this.hands = [];
  this.pointables = [];
}

Gesture.prototype.toString = function() {
  return "[Cylon::Leap::Gesture - " + this.type + "]";
};

Gesture.prototype._mapFrameObjects = function(frame) {
  for (var i = 0; i < frame.hands.length; i++) {
    var hand = frame.hands[i];

    if (this.handIds.indexOf(hand.id) >= 0) {
      this.hands.push(hand);
    }
  }

  for (var i = 0; i < frame.pointables.length; i++) {
    var pointable = frame.pointables[i];

    if (this.pointableIds.indexOf(pointable.id) >= 0) {
      this.pointables.push(pointable);
    }
  }

  return this;
};
