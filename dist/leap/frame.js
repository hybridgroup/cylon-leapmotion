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
        var gesture, hand, point, pointable, _i, _j, _k, _l, _len, _len1, _len2, _len3, _len4, _len5, _m, _n, _ref, _ref1, _ref2, _ref3, _ref4, _ref5, _ref6, _ref7;
        this.id = frame.id;
        this.timestamp = frame.timestamp;
        this.raw = frame;
        _ref = [[], [], []], this.gestures = _ref[0], this.hands = _ref[1], this.pointables = _ref[2];
        this.rotation = {
          axis: frame.r[0],
          angle: frame.r[1],
          matrix: frame.r[2]
        };
        _ref1 = [frame.s, frame.t], this.scaleFactor = _ref1[0], this.translation = _ref1[1];
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
        _ref5 = this.hands;
        for (_l = 0, _len3 = _ref5.length; _l < _len3; _l++) {
          hand = _ref5[_l];
          hand._mapFrameObjects(this);
        }
        _ref6 = this.gestures;
        for (_m = 0, _len4 = _ref6.length; _m < _len4; _m++) {
          gesture = _ref6[_m];
          gesture._mapFrameObjects(this);
        }
        _ref7 = this.pointables;
        for (_n = 0, _len5 = _ref7.length; _n < _len5; _n++) {
          pointable = _ref7[_n];
          pointable._mapFrameObjects(this);
        }
      }

      Frame.prototype.toString = function() {
        return "[Cylon::Leap::Frame id='" + this.id + "' timestamp='" + this.timestamp + "']";
      };

      return Frame;

    })();
  });

}).call(this);
