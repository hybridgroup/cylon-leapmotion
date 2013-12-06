/*
 * cylon-leapmotion Leap Hand class
 * http://cylonjs.com
 *
 * Copyright (c) 2013 The Hybrid Group
 * Licensed under the Apache 2.0 license.
*/


(function() {
  "use strict";
  var namespace;

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
      }

      Hand.prototype.toString = function() {
        return "[Cylon::Leap::Hand X='" + this.palmX + "' Y='" + this.palmY + "' Z='" + this.palmZ + "']";
      };

      return Hand;

    })();
  });

}).call(this);
