/*
 * cylon-leapmotion Leap Frame class
 * http://cylonjs.com
 *
 * Copyright (c) 2013 The Hybrid Group
 * Licensed under the Apache 2.0 license.
*/


"use strict";

var namespace = require('node-namespace');

require('./gesture');
require('./hand');
require('./pointable');

namespace('Leap', function() {
   this.Frame = (function() {
    function Frame(frame) {
      this.id = frame.id;
      this.timestamp = frame.timestamp;
      this.raw = frame;
      this.scaleFactor = frame.s;
      this.translation = frame.t;

      this.rotation = {
        axis: frame.r[0],
        angle: frame.r[1],
        matrix: frame.r[2]
      };

      this.gestures = [];
      this.hands = [];
      this.pointables = [];

      for (var i = 0; i < frame.gestures.length; i++) {
        this.gestures.push(new Leap.Gesture(frame.gestures[i]));
      }

      for (var i = 0; i < frame.hands.length; i++) {
        this.hands.push(new Leap.Hand(frame.hands[i]));
      }

      for (var i = 0; i < frame.pointables.length; i++) {
        this.pointables.push(new Leap.Pointable(frame.pointables[i]));
      }

      for (var i = 0; i < this.gestures.length; i++) {
        this.gestures[i]._mapFrameObjects(this);
      }

      for (var i = 0; i < this.hands.length; i++) {
        this.hands[i]._mapFrameObjects(this);
      }

      for (var i = 0; i < this.pointables.length; i++) {
        this.pointables[i]._mapFrameObjects(this);
      }
    }

    Frame.prototype.anyHands = function() {
      return this.hands.length > 0;
    };

    Frame.prototype.toString = function() {
      return "[Cylon::Leap::Frame id='" + this.id + "' timestamp='" + this.timestamp + "']";
    };

    return Frame;

  })();
});
