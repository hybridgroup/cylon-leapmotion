/*
 * cylon-leapmotion Leap Hand class
 * http://cylonjs.com
 *
 * Copyright (c) 2013 The Hybrid Group
 * Licensed under the Apache 2.0 license.
*/

"use strict";

var Hand = module.exports = function Hand(data) {
  for (var key in data) {
    this[key] = data[key];
  }

  if (this.palmPosition) {
    this.palmX = this.palmPosition[0]
    this.palmY = this.palmPosition[1]
    this.palmZ = this.palmPosition[2]
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
  for (var i = 0; i < frame.pointables.length; i++) {
    var pointable = frame.pointables[i];
    if (pointable.handId === this.id) {
      this.pointables.push(pointable);
    }
  }

  for (var i = 0; i < frame.gestures.length; i++) {
    var gesture = frame.gestures[i];
    if (gesture.handIds.indexOf(this.id) >= 0) {
      this.gesture = gesture;
    }
  }
};
